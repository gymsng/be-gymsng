import loadAppResources from "./loaders"
import { createApp } from "./app"
import { APP_PORT } from "./config"
import http from "http"
import chalk from "chalk";
 
//create app instance
const app = createApp();

//load app resources
loadAppResources(app).then(()=>{
    //after app has loaded its resources, succesfully starts the server
    const Server = http.createServer(app)
    //set up a tls socket
    
    Server.listen(APP_PORT, () => console.log(chalk.bold.yellow(`server is running at http://localhost:${APP_PORT}`)));
})


 