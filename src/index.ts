import loadAppResources from "./loaders"
import { createApp } from "./app"
import { APP_PORT } from "./config"
import http from "http"
import chalk from "chalk";
   
const app = createApp();

loadAppResources(app).then(()=>{
    const Server = http.createServer(app)
    Server.listen(APP_PORT, () => console.log(chalk.bold.yellow(`server is running at http://localhost:${APP_PORT}`)));
})


