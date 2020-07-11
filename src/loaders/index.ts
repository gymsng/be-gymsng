import { loadMongo } from "./loadMongo"
import { loadRoutes } from "./loadRoutes"
import { loadStore } from "./loadStore"
import { Application } from "express"
import chalk from "chalk";

/**
 * Executes all loaders. If an error occurs in one, the whole
 * loading process fails.
 * @param  {object} app The app  object
 * @return {Promise}
 */

export default function loadAppResources(app: Application) {
    console.log(chalk.bold.blue("loading app resources..."))
    return Promise.all([
        loadMongo(),
        loadStore(app), //store must be loaded before routes, if not session might end up undefined
        loadRoutes(app)
    ]).then(() => console.log(chalk.bold.green("app resources Loaded")));
}