import loadAppResources from "./loaders"
import { createApp } from "./app"
import { PORT } from "./config"
import http from "http"
import https from "https"
import chalk from "chalk";
import fs from "fs"
import { IN_PROD } from "./config"
//create app instance
const app = createApp();
const privateKey = fs.readFileSync('cert/server.key', 'utf8');
const certificate = fs.readFileSync('cert/app.crt', 'utf8');
const credentials =  {key: privateKey, cert: certificate};

//load app resources
loadAppResources(app).then(()=>{
    //after app has loaded its resources, succesfully starts the server
    //create httpserver
    const httpServer = http.createServer(app)
    //create https server
    const httpsServer = https.createServer(credentials,app)
    //set up a tls socket
    if(IN_PROD){
        httpsServer.listen(PORT, () => console.log(chalk.bold.yellow(`server is running at https://localhost:${PORT}`)));
    }else{
        httpServer.listen(PORT, () => console.log(chalk.bold.yellow(`server is running at http://localhost:${PORT}`)));
    }
  
})
//Upload the validation file to gymsbackend.herokuapp.com/.well-known/pki-validation/

 