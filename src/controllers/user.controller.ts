import { regSchema } from "../validation"
import {Request,Response,NextFunction} from "express"
import { SUCCESSMESSAGE,STATUSCODE } from "../constants"
import { createError } from "../utils"
import { User } from "../models"

export class userController {
   static async registerUser(req:Request,res:Response,next:NextFunction){
          try{
           const {error, value} = await regSchema.validate(req.body,{abortEarly:false})
          if(error){
              const message =error.details.map(field=>field.message).join(',')
              throw createError(STATUSCODE.bad,message)
          }
           const {name, email, password} = req.body

           //check for existing user
           const existingUser = await User.exists({email})
           if(existingUser){
               throw createError(STATUSCODE.conflict,"invalid email")
           }
            // Create a new user if no existing
           const user = await User.create({name,email,password})
           
           //Return response back to client
           return res.status(STATUSCODE.created).json({status:SUCCESSMESSAGE,data:user})
          
        }catch(err){
              next(err)
          }
   }
}