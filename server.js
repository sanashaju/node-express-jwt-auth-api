import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: "30mb", extented: true }));
app.use(express.urlencoded({ limit: "30mb", extented: true }));

app.use(morgan("dev"));

await connectDB()

app.listen(PORT, () => {
  console.log(
    `process ID ${process.pid}:server running on http://localhost:${PORT}/ in ${process.env.NODE_ENV} mode`
  );
});
