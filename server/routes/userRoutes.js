import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// Import express-async-handler for handling asynchronous errors
import asyncHandler from "express-async-handler";

router.post("/", asyncHandler(registerUser));

export default router;
