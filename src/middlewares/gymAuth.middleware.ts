import { RequestHandler, Request, Response, NextFunction } from "express";
import mongoose from "mongoose"
import { Gyms } from "../models"
import { STATUSCODE } from "../constants";
import {createError} from "../utils"
import  {catchAsync} from "./error.middleware"

export const isGymAdminRole = catchAsync(async (req: Request, res: Response, next: NextFunction)=>{
    const id = req.params.id || req.body.gymid
    const gym = await Gyms.findById(id)
    if (!gym) throw createError(STATUSCODE.NOTFOUND, `requested gym with ${req.params.id} not found`)
    if (req.session!.userId != gym!.owner) {
      throw createError(STATUSCODE.UNAUTHORIZED, "you can't carry this operation")
    }
    req.gymid = gym._id
    next()
})