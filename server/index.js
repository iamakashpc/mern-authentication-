import express from "express";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api/users", userRoutes);

// Error handling middleware should be mounted last
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
