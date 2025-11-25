import { Router } from "express";
import { loginUser, registerUser } from "../controllers/authController.js";
import { validate } from "../middleware/validationMiddleware.js";
import { registerValidation } from "../validations/authValidations.js";

const authRoutes = Router({ mergeParams: true });

authRoutes.post("/register", validate(registerValidation), registerUser);

authRoutes.post("/login", loginUser);

export default authRoutes;
