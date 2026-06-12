import express from "express";
import multer from "multer";
import mongoose from "mongoose";
import Analysis from "../models/analysis.js";
import extractText from "../utils/pdfExtract.js";
import analyzeWithGroq from "../utils/groq.js";
import { authProtect } from "../middleware/authMiddleware.js";
import { verifytoken } from "../utils/jwt.js";
import User from "../models/user.js";

const router = express.Router();

// ─── Multer config ───────────────────────────────────────────────────
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (file.mimetype === "application/pdf") cb(null, true);
    else cb(new Error("Only PDF files are allowed"), false);
  },
});

const MAX_TEXT_LENGTH = 50000;

// ─── Optional auth (attaches user if token present, never rejects) ──
const optionalAuth = async (req, _res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) return next();
  const decoded = verifytoken(authHeader.substring(7));
  if (decoded?.userId) {
    try {
      const user = await User.findById(decoded.userId).select("-password");
      if (user) req.user = user;
    } catch {
      /* ignore */
    }
  }
  next();
};

// ─── Helper: validate MongoDB ObjectId ──────────────────────────────
function isValidObjectId(id) {
  return (
    typeof id === "string" &&
    mongoose.Types.ObjectId.isValid(id) &&
    String(new mongoose.Types.ObjectId(id)) === id
  );
}

// ─── POST /analyze/pdf  — PDF file upload ───────────────────────────
router.post(
  "/analyze/pdf",
  optionalAuth,
  (req, res, next) => {
    upload.single("offerFile")(req, res, (err) => {
      if (err) {
        const status = err.code === "LIMIT_FILE_SIZE" ? 413 : 400;
        return res.status(status).json({ error: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No PDF file uploaded." });
      }

      const rawText = await extractText(req.file.buffer);
      if (!rawText?.trim()) {
        return res.status(400).json({ error: "Could not extract text from PDF." });
      }

      const analysisResult = await analyzeWithGroq(rawText);
      const analysis = new Analysis({
        userId: req.user?._id || null,
        inputType: "file",
        rawText: rawText.substring(0, 10000),
        result: analysisResult,
      });
      await analysis.save();
      return res.json({ id: analysis._id, result: analysisResult });
    } catch (error) {
      console.error("PDF analysis error:", error.message);
      res.status(500).json({ error: error.message || "PDF analysis failed" });
    }
  }
);

// ─── POST /analyze/text  — Plain text input ─────────────────────────
router.post("/analyze/text", optionalAuth, async (req, res) => {
  try {
    const { text } = req.body;

    if (!text || typeof text !== "string" || !text.trim()) {
      return res.status(400).json({ error: "Text is required and must be a non-empty string." });
    }

    if (text.length > MAX_TEXT_LENGTH) {
      return res.status(400).json({ error: `Text too long (max ${MAX_TEXT_LENGTH.toLocaleString()} chars)` });
    }

    const analysisResult = await analyzeWithGroq(text);
    const analysis = new Analysis({
      userId: req.user?._id || null,
      inputType: "text",
      rawText: text.substring(0, 10000),
      result: analysisResult,
    });
    await analysis.save();
    return res.json({ id: analysis._id, result: analysisResult });
  } catch (error) {
    console.error("Text analysis error:", error.message);
    res.status(500).json({ error: error.message || "Text analysis failed" });
  }
});

// ─── GET /analyses — all analyses for the caller ────────────────────
// Optional auth: if logged in, return their analyses. If anonymous,
// return only analyses with userId === null.
router.get("/analyses", optionalAuth, async (req, res) => {
  try {
    const filter = req.user ? { userId: req.user._id } : { userId: null };
    const analyses = await Analysis.find(filter).sort({ createdAt: -1 });

    // Truncate rawText in the list response (full text in detail view)
    const limited = analyses.map((a) => ({
      ...a.toObject(),
      rawText: (a.rawText || "").substring(0, 300),
    }));
    res.json(limited);
  } catch (error) {
    console.error("Fetch analyses error:", error.message);
    res.status(500).json({ error: "Failed to fetch analyses" });
  }
});

// ─── GET /analyze/:id — single analysis (ownership-gated) ──────────
router.get("/analyze/:id", optionalAuth, async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid analysis ID" });
    }

    const analysis = await Analysis.findById(req.params.id);
    if (!analysis) {
      return res.status(404).json({ error: "Analysis not found" });
    }

    // Ownership: if analysis has a userId, only the owner can view it
    if (analysis.userId && req.user && !analysis.userId.equals(req.user._id)) {
      return res.status(403).json({ error: "You do not have permission to view this analysis" });
    }
    // If analysis has a userId but caller is not logged in, deny
    if (analysis.userId && !req.user) {
      return res.status(401).json({ error: "Authentication required to view this analysis" });
    }

    res.json(analysis);
  } catch (error) {
    console.error("Fetch analysis error:", error.message);
    res.status(500).json({ error: "Failed to fetch analysis" });
  }
});

// ─── DELETE /analyze/:id — delete analysis (owner only) ─────────────
router.delete("/analyze/:id", authProtect, async (req, res) => {
  try {
    if (!isValidObjectId(req.params.id)) {
      return res.status(400).json({ error: "Invalid analysis ID" });
    }

    const analysis = await Analysis.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });
    if (!analysis) {
      return res.status(404).json({ error: "Analysis not found or you do not own it" });
    }
    res.json({ success: true });
  } catch (error) {
    console.error("Delete analysis error:", error.message);
    res.status(500).json({ error: "Delete failed" });
  }
});

export default router;
