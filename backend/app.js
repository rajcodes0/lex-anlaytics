import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDb } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import analyzeRoutes from "./routes/analyzeRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";

dotenv.config();
const app = express();

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "https://lex-anlaytics.pages.dev",
  "http://localhost:5173",
].filter(Boolean);
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error(`CORS not allowed for origin: ${origin}`));
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", authRouter);
app.use("/api", analyzeRoutes);
app.use("/api/payment", paymentRoutes);

app.get("/", (_req, res) => res.json({ message: "API running" }));

// ─── 404 handler ─────────────────────────────────────────────────────
app.use((_req, res) => res.status(404).json({ error: "Route not found" }));

// ─── Global error handler ────────────────────────────────────────────
app.use((err, _req, res, _next) => {
  console.error("Unhandled Express error:", err);
  const status = err.status || err.statusCode || 500;
  res.status(status).json({
    error:
      process.env.NODE_ENV === "production"
        ? "Internal server error"
        : err.message,
  });
});

// ─── Global handlers for uncaught errors ────────────────────────────
process.on("unhandledRejection", (reason) => {
  console.error("❌ Unhandled Promise Rejection:", reason);
});

process.on("uncaughtException", (error) => {
  console.error("❌ Uncaught Exception:", error);
  process.exit(1);
});

const PORT = process.env.PORT || 5000;
const start = async () => {
  await connectDb();
  app.listen(PORT, () => console.log(`✅ Server on ${PORT}`));
};
start();
