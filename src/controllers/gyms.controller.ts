import { catchAsync } from "../middlewares";
import { createError } from "../utils"
import { FEEDBACK,STATUSCODE, ROLES  } from "../constants"
import { gymSchema, validate } from "../validation"
import { Gyms } from "../models"
export class gymsController{
     static createGym = catchAsync(async (req,res,next)=>{
         //validate gym
       await  validate(gymSchema,req.body)
       const { name } = req.body
         //check if gym already exists
        const existingGym = await Gyms.exists({name})

        if(existingGym){
            console.log(existingGym)
            throw createError(STATUSCODE.CONFLICT,"gym already exists")
        }
        //create gym
        const gym = await Gyms.create({...req.body});
         //send response
        res.status(STATUSCODE.SUCCESS).json({message:"OK",data:gym})
     })
     static getAllGym = catchAsync(async (req,res,next)=>{
       const gyms = await Gyms.find({}) 
       res.status(STATUSCODE.SUCCESS).json({message:"OK",data:gyms})
    })
    static getSingleGym = catchAsync((req,res,next)=>{
        //validate gym
          
        //create gym

        //send response
    })
     static updateGym = catchAsync((req,res,next)=>{
        //validate gym
          
        //create gym

        //send response
    })
    static removeGym = catchAsync((req,res,next)=>{
        //validate gym
          
        //create gym

        //send response
    })
   
}