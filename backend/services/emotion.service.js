export function analyzeEmotion(text) {
  const t = text.toLowerCase();

  if (t.includes("happy") || t.includes("good") || t.includes("great")) {
    return "Happy";
  }
  if (t.includes("sad") || t.includes("down") || t.includes("bad")) {
    return "Sad";
  }
  if (t.includes("angry") || t.includes("mad") || t.includes("hate")) {
    return "Angry";
  }
  if (t.includes("stress") || t.includes("tired")) {
    return "Stressed";
  }

  return "Neutral";
}
