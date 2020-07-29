import mongoose from "mongoose";
import { MONGO_URL, MONGO_OPTIONS, ATLAS_URL } from "../config"
import chalk from "chalk";

/**
 * Creates a mongo connection instance
 */

export const loadMongo = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const connection = await mongoose.connect( ATLAS_URL || MONGO_URL, MONGO_OPTIONS)

      console.log(chalk.green("DATABASE CONNECTED"))

      /* SETUP MONGO EVENT LISTENER */

      //ERROR  LISTENER
      mongoose.connection.on("error", (err) => {
        return console.error.bind(console, "DB connection error!")
      }
      );

      //DISCONNECTION LISTENER
      mongoose.connection.on(
        "disconected",
        console.error.bind(console, "DATABASE DISCONNECTED")
      );

      //APPLICATION TERMINATION LISTENER
      process.on("SIGINT", () => {
        console.log(
          "mongoose default connection is disconnected due to application termination"
        );
        process.exit(0);
      });

      resolve();
    } catch (err) {
      console.log(err)
      reject(err)
    }
  })
};
