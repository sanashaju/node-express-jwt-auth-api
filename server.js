import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";



dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "30mb", extented: true }));
app.use(express.urlencoded({ limit: "30mb", extented: true }));

app.use(morgan("dev"));

await connectDB()

app.use("/api/auth", authRoutes);
app.use("/api/users",userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `process ID ${process.pid}:server running on http://localhost:${PORT}/ in ${process.env.NODE_ENV} mode`
  );
});
