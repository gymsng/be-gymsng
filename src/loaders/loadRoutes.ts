import express, { Application } from "express"
import { apiRoute } from "../routes"
import chalk from "chalk";
import { ServerError, NotFound, catchAsync, isActive } from "../middlewares";

export const loadRoutes = (app: Application) => {

  return new Promise((resolve, reject) => {
    app.use(express.json());
    app.use(catchAsync(isActive));
    //REST API ENDPOINT
    app.use("/api/v1", apiRoute);

    //TODO-> GRAPHQL API ENDPOINT

    //HANDLE REQUEST ERRORS
    app.use(NotFound);
    app.use(ServerError);

    console.log(chalk.green("Routes Loaded"))
    resolve()
  });
}

