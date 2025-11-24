import User from "../models/User.js";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res) => {
  console.log(">>>>Register user function callled",req.body);

  try {
    const { username, email, password, role, age } = req.body;

    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Include optional fields role and age
    const user = await User.create({
      username,
      email,
      password,
      role: role || "user",
      age: age || null,
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      age: user.age,
    });
  } catch (error) {
    console.log(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "username and passwored requiered" });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      {
        id: user._id,
        name: user.username,
        admin: user.role == "admin" ? true : false,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email,
      token,
      role: user.role,
    });
  } catch (error) {
    console.log(error);
  }
};
