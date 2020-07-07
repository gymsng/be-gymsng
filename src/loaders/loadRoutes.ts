import express, { Application, Request, Response, NextFunction } from "express"
import { createError, AppErrorInterface } from "../utils"
import { apiRoute } from "../routes"
import chalk from "chalk";
export const loadRoutes = (app: Application) => {

  return new Promise((resolve, reject) => {
    app.use(express.json());

    //REST API ENDPOINT
    app.use("/api/v1", apiRoute);

    //TODO-> GRAPHQL API ENDPOINT

    //HANDLE REQUEST ERRORS
    app.use((err: AppErrorInterface, req: Request, res: Response, next: NextFunction) => {
      // handle internal server errors
      let err_message = ""
      if (!err.status) {
        if (process.env.NODE_ENV === "development") {
          err_message = err.message || "Internal server error"
        } else {
          err_message = "Internal server error"
        }
        err = createError(500, err_message)
      }
      res.status(err.status).json({
        status: err.status,
        message: err.message,
      })
    })
    console.log(chalk.green("Routes Loaded"))
    resolve()
  });
}

