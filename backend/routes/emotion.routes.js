import express from "express";
import {
  detectTextEmotion,
  getStatus
} from "../controllers/emotion.controller.js";

const router = express.Router();

router.post("/text", detectTextEmotion);
router.get("/status", getStatus);

export default router;
