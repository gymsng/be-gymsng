import loadAppResources from "./loaders"
import { createApp } from "./app"
import { PORT } from "./config"
import http from "http"
import chalk from "chalk";
 
//create app instance
const app = createApp();

//load app resources
loadAppResources(app).then(()=>{
    //after app has loaded its resources, succesfully starts the server
    const httpServer = http.createServer(app)
    httpServer.listen(PORT, () => console.log(chalk.bold.yellow(`server is running at http://localhost:${PORT}`)));
   
  
})


 