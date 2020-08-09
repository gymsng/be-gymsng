import { Router } from "express"
import { membershipController } from "../controllers"
import { ensureIsLoggedOut, ensureIsLoggedIn } from "../middlewares"
import { isGymAdminRole } from "../middlewares/gymAuth.middleware";
export const membershipRoute = Router();

membershipRoute.post('/',[ensureIsLoggedIn,isGymAdminRole],membershipController.create);