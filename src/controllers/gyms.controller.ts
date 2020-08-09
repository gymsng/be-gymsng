import { catchAsync } from "../middlewares";
import { createError } from "../utils"
import {  STATUSCODE, ROLES } from "../constants"
import { gymSchema, validate } from "../validation"
import { Gyms, UserDocument } from "../models"
import session from "express-session";

export class gymsController {
  static createGym = catchAsync(async (req, res, next) => {
    //check if user request is a gym admin
    if (req.session!.isAdmin !== 1) {
      throw createError(STATUSCODE.UNAUTHORIZED, "you are not authorized to carry out this action")
    }
    await validate(gymSchema, req.body)
    const { name } = req.body
    const existingGym = await Gyms.exists({ name })
    if (existingGym) {
      throw createError(STATUSCODE.CONFLICT, "gym already exists")
    }
    const gym = await Gyms.create({ ...req.body, owner: req.session!.userId });
    res.status(STATUSCODE.SUCCESS).json({error:false, message: "gym created successfully", data: gym })
  })

  static getAllGym = catchAsync(async (req, res, next) => {
     const limit    = req.query.limit || 0
     const skip     = req.query.skip   || 0
     const search   = req.query.search
     const location = req.query!.location 
     const category = req.query.category

     const gyms = await Gyms.find({
       $or:[{location},{name:search}]
     }).skip(+skip).limit(+limit).populate("Memberships")
     res.status(STATUSCODE.SUCCESS).json({ error:false, count:gyms.length, message: "OK", data: gyms })
  })

  static getGymById = catchAsync(async (req, res, next) => {
    const gym = await Gyms.findById(req.params.id).populate('owner')
    res.status(STATUSCODE.SUCCESS).json({ error:false, data: gym })
  })

  static updateGymById = catchAsync(async (req, res, next) => {
    const updatedGym = await Gyms.findOneAndUpdate({ _id: req.params.id, owner: req.session!.userId }, req.body, { new: true })
    res.status(STATUSCODE.SUCCESS).json({ error:false, data: updatedGym, message:"updated one gym" })
  })

  static removeGymById = catchAsync(async (req, res, next) => {
    const updatedGym = await Gyms.findOneAndRemove({ _id: req.params.id, owner: req.session!.userId })
    res.status(STATUSCODE.SUCCESS).json({ error:false, message: "deleted one gym" })
  })

}