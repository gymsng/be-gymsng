import { Router } from "express"
import { userController } from "../controllers"
import { ensureIsLoggedOut, ensureIsLoggedIn } from "../middlewares"
export const userRoute = Router();

//Get Endpoint
userRoute.get('/', ensureIsLoggedIn, userController.index)
// POST ENDPOINT
userRoute.post("/register", ensureIsLoggedOut, userController.registerUser)
userRoute.post("/login", ensureIsLoggedOut, userController.loginUser)
userRoute.post("/logout", ensureIsLoggedIn, userController.logOutUser)


