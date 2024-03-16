import User from "../model/userModel.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

const authUser = asyncHandler(async (req, res) => {
	const {  email, password } = req.body;

    const user = await User.findOne({email})

	if (user && (user.matchPassword(password))) {
		generateToken(res, user._id); // Assuming generateToken function is properly defined
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
		});
		// Send token in the Authorization header
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	const userExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("User already exists");
	}

	const user = await User.create({
		name,
		email,
		password,
	});

	if (user) {
		generateToken(res, user._id); // Assuming generateToken function is properly defined
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
		});
		// Send token in the Authorization header
	} else {
		res.status(400);
		throw new Error("Invalid user data");
	}
});

const logout = (req,res) =>{
res.cookie('jwt','',{
    httpOnly:true,
    expires: new Date(0),
})
 res.status(200).json({ message: "Logged out successfully" });
}

 const getUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
        });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
});


export { authUser, registerUser, logout, getUserProfile };
