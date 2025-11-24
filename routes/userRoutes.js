import { Router } from "express";
import { getallUsers, getUserByIdPublic } from "../controllers/userController.js";

const userRoutes = Router({ mergeParams: true });

userRoutes.get("/",getallUsers)

userRoutes.get("/:id", getUserByIdPublic);


export default userRoutes;