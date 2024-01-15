import { Router } from "express";
import { UsersController } from "../controllers/user/controller.user.js";

export const userRouter = Router();

userRouter.get("/", UsersController.getAll);
