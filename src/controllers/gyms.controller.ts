import { catchAsync } from "../middlewares";
import { createError } from "../utils"
import { FEEDBACK,STATUSCODE, ROLES  } from "../constants"
import { gymSchema, validate } from "../validation"
import { Gyms } from "../models"
import session from "express-session";
export class gymsController{
     static createGym = catchAsync(async (req,res,next)=>{
         //check if user request is a gym admin
        if(req.session!.isAdmin !== 1){
            throw createError(STATUSCODE.UNAUTHORIZED,"you are not authorized to carry out this action")
        }
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
        const gym = await Gyms.create({...req.body,owner:req.session!.userId});
         //send response
        res.status(STATUSCODE.SUCCESS).json({message:"OK",data:gym})
     })
     static getAllGym = catchAsync(async (req,res,next)=>{
       const gyms = await Gyms.find({}) 
       res.status(STATUSCODE.SUCCESS).json({message:"OK",data:gyms})
    })
    static getSingleGym = catchAsync(async (req,res,next)=>{
       const gym = await Gyms.findById(req.params.id).populate('owner')
       res.status(STATUSCODE.SUCCESS).json({success:FEEDBACK.SUCCESSMESSAGE,data:gym})
    })
     static updateGym = catchAsync(async (req,res,next)=>{
        //validate gym
          const gym = await Gyms.findByIdAndUpdate(req.params.id,req.body)
        //create gym
         res.status(STATUSCODE.SUCCESS).json({success:FEEDBACK.SUCCESSMESSAGE,data:gym})
        //send response
    })
    static removeGym = catchAsync(async (req,res,next)=>{
      
          const gym = await await Gyms.findById(req.params.id).populate('owner');
          if(req.session!.userId !== gym?.owner._id){
           
          }
      
        res.status(STATUSCODE.SUCCESS).json({success:FEEDBACK.SUCCESSMESSAGE,data:gym})
        //send response
    })
   
}