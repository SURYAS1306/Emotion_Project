import { analyzeEmotion } from "../services/emotion.service.js";

export function detectTextEmotion(req, res) {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  const emotion = analyzeEmotion(message);

  res.json({
    input: message,
    emotion
  });
}

export function getStatus(req, res) {
  res.json({
    status: "Emotion backend is running"
  });
}
