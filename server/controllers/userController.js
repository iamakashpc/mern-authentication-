import asyncHandler from "express-async-handler";
import User from "../model/userModel.js";

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	// Check if user already exists
	const userExist = await User.findOne({ email });
	if (userExist) {
		res.status(400);
		throw new Error("User already exists");
	}

	// Create new user
	const user = await User.create({ name, email, password });

	// Send response
	res.status(201).json(user);
});

export { registerUser };
