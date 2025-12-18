import express from "express";
import cors from "cors";
import emotionRoutes from "./routes/emotion.routes.js";
import { errorHandler } from "./middleware/error.middleware.js";
import { PORT } from "./config/config.js";

export function startServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/emotion", emotionRoutes);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
  });
}
