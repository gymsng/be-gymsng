import Joi from "@hapi/joi"
import { join } from "path"

export const regSchema = Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    fullname: Joi.string().min(3).max(128).trim().required(),
    password:Joi.string().min(8).max(128).required(),
    confirmPassword: Joi.valid(Joi.ref('password')),
    email: Joi.string().email().min(8).max(254).lowercase().trim().required()
})