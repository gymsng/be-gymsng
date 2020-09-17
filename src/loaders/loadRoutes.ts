import express, { Application } from "express"
import { apiRoute } from "../routes"
import chalk from "chalk"
import cors from "cors"
import path from "path"
import { ServerError, NotFound, catchAsync, isActive} from "../middlewares";
import { IN_PROD } from "../config"

export const loadRoutes = (app: Application) =>  new Promise((resolve, reject) => {
    app.use(express.json());
    const client = !IN_PROD ? 'http://localhost:3000' : "https://fittech.me/"

    app.use(cors({credentials: true, origin: client}))
    
    app.use(catchAsync(isActive));
    //REST API ENDPOINT
    app.use("/v1", apiRoute);
   
    //TODO-> GRAPHQL API ENDPOINT
   
    //HANDLE REQUEST ERRORS
    app.use(NotFound);
    app.use(ServerError);
    
    console.log(chalk.green("Routes Loaded"))
    resolve()

  });


