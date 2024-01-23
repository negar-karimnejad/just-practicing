import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.route.js";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to MongoDB successfully👍");
});

const app = express();

app.listen(3000, () => {
  console.log("Server listining on port 3000");
});

app.get("/api/user", userRoutes);
