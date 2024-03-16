import express from "express";
import { authUser, getUserProfile, logout, registerUser } from "../controllers/userController.js";

const router = express.Router();

// Import express-async-handler for handling asynchronous errors
import asyncHandler from "express-async-handler";
import { protect } from "../middlewares/authMiddleware.js";

router.post("/", asyncHandler(registerUser));
router.post("/login", asyncHandler(authUser));
router.post("/logout", logout);
router
	.route("/profile")
	.get(protect, getUserProfile);
	// .put(protect, updateUserProfile);

export default router;
