import { catchAsync } from "../middlewares";
import { Request, Response, NextFunction } from "express";
import { validate, membershipSchema } from "../validation";
import { Gyms, Memberships, MembershipDocument } from "../models";
import { createError } from "../utils";
import { STATUSCODE } from "../constants";
import { gymsRoute } from "../routes/gyms.route";

function membershipIterator (){
 // this.forEach
}
export class membershipController {
    static create = catchAsync(async (req,res,next)=>{
        const { gymid} = req.body
        const memberships:MembershipDocument[] = req.body.memberships;
        //get the gym
        const gym = await Gyms.findById(gymid);
        if(!gym){
          throw createError(STATUSCODE.BAD,"The requested gym to add membership is invalid") 
        }
        if(!memberships){
            throw createError(STATUSCODE.NOCONTENT,"invalid memebership or gymid")
        }
         for(let i=0; i <memberships.length; i++){
            await validate(membershipSchema, memberships[i]);
            memberships[i]['gymid'] = gymid
         }
          //save the membership
         const  newMemberships =  await Memberships.insertMany(memberships)
         gym.memberships = [...gym.memberships,...newMemberships.map( ({_id}) =>_id )];
        //save gym
        const newGym = await gym.save()
        return res.status(STATUSCODE.SUCCESS).json({error:false,message:"membership was added to gym succesfully",gym:newGym})
    })

    static delete = catchAsync(async (req,res,next)=>{
           
    })
   
}