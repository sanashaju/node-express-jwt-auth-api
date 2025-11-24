import mongoose from "mongoose";
import User from "../models/User.js";


export const getallUsers = async (req, res, next) => {
    // console.log(">>>>req.headers",req.headers)
    console.log(">>>>>>function called")
  try {
    const query = {};

    // Age filter (convert to Number)
    if (req.query.age) {
      query.age = Number(req.query.age);
    }

    // Role filter (case-insensitive & trim spaces)
    if (req.query.role) {
      query.role = { $regex: new RegExp(`^${req.query.role.trim()}$`, 'i') }; 
    }

    console.log("Final Query:", query); // Debugging

    const users = await User.find(query).select('-password');
    res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserByIdPublic = async (req, res, next) => {
  try {
    console.log(req)
    console.log(req.params)
    const userId = req.params.id.trim();

    // 1️⃣ Validate ID format
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ message: 'Invalid user ID format' });
    }

    // 2️⃣ Find user, exclude password
    const user = await User.findById(userId).select('-password');

    // 3️⃣ Handle not found
    if (!user) {
      return res.status(404).json({ message: `User with ID ${userId} not found` });
    }

    // 4️⃣ Return user
    res.status(200).json(user);
  } catch (err) {
    next(err); // Pass errors to your global error handler
  }
};