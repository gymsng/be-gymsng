import express from "express"
import chalk from "chalk"
/**
 * Creates an instance of express application
 * @return {Object} app the express apps
 * 
 */
export const createApp =()=>{
   const app = express()
    app.get("/",(_req,res)=>{
        res.json({message:"worked"})
    })
  console.log(chalk.bold.underline.green("created app"))
   return app;
}




