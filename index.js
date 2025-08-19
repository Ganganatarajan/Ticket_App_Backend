import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config.js";
import { connectDB } from "./config/database.js";
import ticketRoutes from "./route/ticketRoute.js";
import { notFound, errorHandler } from "./middleware/middleware.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => res.json({ ok: true }));
app.use("/api/tickets", ticketRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 3000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
  });
});
