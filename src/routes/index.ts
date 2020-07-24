import { Router } from "express"
import { userRoute } from "./user.routes"
import { gymsRoute } from "./gyms.route";

export const apiRoute = Router();
apiRoute.use("/users", userRoute)
apiRoute.use("/gyms",gymsRoute)
export * from './auth'