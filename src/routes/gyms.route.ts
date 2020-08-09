import { Router } from "express"
import { gymsController } from "../controllers"
import { ensureIsLoggedOut, ensureIsLoggedIn } from "../middlewares"
import { isGymAdminRole } from "../middlewares/gymAuth.middleware";
import { membershipRoute } from "./membership.route"
export const gymsRoute = Router();
//Todo: add ensure is owner and superAdmin Middlewares
gymsRoute.get("/",gymsController.getAllGym)
gymsRoute.get("/:id",gymsController.getGymById)
gymsRoute.post("/create",ensureIsLoggedIn,gymsController.createGym)
gymsRoute.patch("/:id",[ensureIsLoggedIn,isGymAdminRole],gymsController.updateGymById)
gymsRoute.delete("/:id",[ensureIsLoggedIn,isGymAdminRole],gymsController.removeGymById)


//GYMS MEMBERSHIP
gymsRoute.use("/membership",membershipRoute)

//Gyms/subscribtion