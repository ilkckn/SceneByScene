import User from "../schemas/userSchema.js";
import { CustomError } from "../utils/errorHandler.js";
import asyncHandler from "../utils/asyncHandler.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

export const getUserById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  if (!user) {
    throw new CustomError("User not found", 404);
  }
  res.status(200).json(user);
});

export const register = asyncHandler(async (req, res) => {
  const { first_name, last_name, username, email, password, age, gender } =
    req.body;
  if (!first_name || !last_name || !username || !email || !password) {
    throw new CustomError("All fields are required", 400);
  }
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new CustomError("Email already exists", 400);
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    first_name,
    last_name,
    username,
    email,
    password: hashedPassword,
    age,
    gender,
  });
  await newUser.save();
  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
});

export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { first_name, last_name, username, password, email, age, gender } =
    req.body;

  const updateUser = {
    first_name,
    last_name,
    username,
    email,
    age,
    gender,
  };

  if (password) {
    updateUser.password = await bcrypt.hash(password, 10);
  }

  const updatedUser = await User.findByIdAndUpdate(id, updateUser, {
    new: true,
    runValidators: true,
  });

  if (!updatedUser) {
    throw new CustomError("User not found", 404);
  }

  const token = jwt.sign(
    {
      id: updatedUser._id,
      first_name: updatedUser.first_name,
      last_name: updatedUser.last_name,
      email: updatedUser.email,
      age: updatedUser.age,
      username: updatedUser.username,
      role: updatedUser.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    path: "/",
  });

  res
    .status(200)
    .json({ updatedUser, token, message: "User updated successfully" });
});

export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedUser = await User.findByIdAndDelete(id);
  if (!deletedUser) {
    throw new CustomError("User not found", 404);
  }
  res
    .status(200)
    .json({ message: "User deleted successfully", user: deletedUser });
});

export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new CustomError("Email and password are required", 400);
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new CustomError("Invalid email or password", 401);
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new CustomError("Invalid email or password", 401);
  }

  const token = jwt.sign(
    {
      id: user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      age: user.age,
      username: user.username,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_EXPIRES_IN,
    }
  );

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    path: "/",
  });

  res.status(200).json({ user, token, message: "Login successful" });
});

export const logout = asyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    path: "/",
  });
  res.status(200).json({ message: "Logout successful" });
});

export const checkSession = asyncHandler(async (req, res) => {
  if (req.user) {
    res.json({ authenticated: true, user: req.user });
    console.log("User object:", req.user);
  } else {
    res.json({ authenticated: false });
    console.log("No user object found in request");
  }
});
