import { Router } from "express"
import { userController } from "../controllers"
export const userRoute = Router();

userRoute.route("/register")
        .post(userController.registerUser)


