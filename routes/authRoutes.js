import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";


const authRoutes = Router({ mergeParams: true });

authRoutes.post("/register", registerUser);

authRoutes.post("/login", loginUser)

export default authRoutes;
