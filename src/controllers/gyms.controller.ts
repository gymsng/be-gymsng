import { catchAsync } from "../middlewares";
import { createError } from "../utils"
import { FEEDBACK, STATUSCODE, ROLES } from "../constants"
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
    res.status(STATUSCODE.SUCCESS).json({ message: "OK", data: gym })
  })

  static getAllGym = catchAsync(async (req, res, next) => {
    const gyms = await Gyms.find({}).populate("Memberships")
    res.status(STATUSCODE.SUCCESS).json({ message: "OK", data: gyms })
  })

  static getGymById = catchAsync(async (req, res, next) => {
    const gym = await Gyms.findById(req.params.id).populate('owner')
    res.status(STATUSCODE.SUCCESS).json({ success: FEEDBACK.SUCCESSMESSAGE, data: gym })
  })

  static updateGymById = catchAsync(async (req, res, next) => {
    const gym = await await Gyms.findById(req.params.id).populate('owner')
    if (req.session!.userId !== (<UserDocument>gym!.owner)._id) {
      throw createError(STATUSCODE.UNAUTHORIZED, "you can't carry this operation")
    }
    
    const updatedGym = await gym!.update(req.body)
    res.status(STATUSCODE.SUCCESS).json({ success: FEEDBACK.SUCCESSMESSAGE, data: updatedGym })
  })

  static removeGymById = catchAsync(async (req, res, next) => {
    const gym =  await Gyms.findById(req.params.id).populate('owner')
    if (req.session!.userId !== (<UserDocument>gym!.owner)._id) {
      throw createError(STATUSCODE.UNAUTHORIZED, "you can't carry this operation")
    }
    res.status(STATUSCODE.SUCCESS).json({ success: FEEDBACK.SUCCESSMESSAGE, message: "ok" })
  })

}