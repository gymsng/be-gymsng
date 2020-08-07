import { Router } from "express"
import { gymsController } from "../controllers"
import { ensureIsLoggedOut, ensureIsLoggedIn } from "../middlewares"
export const gymsRoute = Router();
//Todo: add ensure is owner and superAdmin Middlewares
gymsRoute.get("/",gymsController.getAllGym)
gymsRoute.get("/:id",gymsController.getGymById)
gymsRoute.post("/create",ensureIsLoggedIn,gymsController.createGym)
gymsRoute.patch("/:id",ensureIsLoggedIn,gymsController.updateGymById)
gymsRoute.delete("/:id",ensureIsLoggedIn,gymsController.removeGymById)

