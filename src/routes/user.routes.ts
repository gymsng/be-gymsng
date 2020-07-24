import { Router } from "express"
import { userController } from "../controllers"
import { ensureIsLoggedOut, ensureIsLoggedIn } from "../middlewares"
export const userRoute = Router();

// GET ENDPOINTS
userRoute.get('/', ensureIsLoggedIn, userController.index)


// POST ENDPOINTS
userRoute.post("/register", ensureIsLoggedOut, userController.registerUser)
userRoute.post("/login", ensureIsLoggedOut, userController.loginUser)
userRoute.post("/logout", ensureIsLoggedIn, userController.logOutUser)
userRoute.post("/registerAdmin",ensureIsLoggedOut,userController.registerAdmin)
userRoute.post("/registerSuperAdmin",ensureIsLoggedIn,userController.registerSuperAdmin)

