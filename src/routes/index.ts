import { Router } from "express"
import { userRoute } from "./user.routes"

export const apiRoute = Router();
apiRoute.use("/users",userRoute)
