import express from "express";
import {
  createOrder,
  verifyPayment,
  getPaymentStatus,
} from "../controllers/paymentController.js";
import { authProtect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/create-order", authProtect, createOrder);
router.post("/verify-payment", authProtect, verifyPayment);
router.get("/payment-status/:paymentId", authProtect, getPaymentStatus);

export default router;
