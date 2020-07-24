import { Router } from "express"
import { gymsController } from "../controllers"
import { ensureIsLoggedOut, ensureIsLoggedIn } from "../middlewares"
export const gymsRoute = Router();
//Todo: add ensure is owner and superAdmin Middlewares
gymsRoute.get("/",gymsController.getAllGym)
gymsRoute.post("/create",ensureIsLoggedIn,gymsController.createGym)
gymsRoute.put("/:id",ensureIsLoggedIn,gymsController.updateGym)
gymsRoute.delete("/:id",ensureIsLoggedIn,gymsController.removeGym)

