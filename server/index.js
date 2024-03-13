import express from "express";
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();
app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
