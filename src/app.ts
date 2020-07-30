import express from "express"
import chalk from "chalk"
import path from "path"
/**
 * Creates an instance of express application
 * @return {Object} app the express apps
 * 
 */
export const createApp =()=>{
   const app = express()
   //i will change this later
   app.use(express.static(path.resolve(__dirname+"/public")))
    
  console.log(chalk.bold.underline.green("created app"))
   return app;
}




