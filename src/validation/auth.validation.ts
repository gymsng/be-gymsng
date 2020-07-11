import Joi, { ObjectSchema } from "@hapi/joi"
import { createError } from "../utils"
import { STATUSCODE } from "../constants"

const username = Joi.string().alphanum().min(3).max(30).required()

const fullname = Joi.string().min(3).max(128).trim().required()

const password = Joi.string().min(8).max(128).regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
    .message('"{#label}" must contain one uppercase, one lowercase, and one digit').required()

const confirmPassword = Joi.valid(Joi.ref('password'))

const email = Joi.string().email().min(8).max(254).lowercase().trim().required()

export const regSchema = Joi.object({
    fullname,
    username,
    email,
    password,
    confirmPassword
})

export const loginSchema = Joi.object({
    email,
    password
})

export const validate = async (schema: ObjectSchema, payload: any) => {
    try {
        await schema.validateAsync(payload, { abortEarly: false })
    } catch (err) {
        throw createError(STATUSCODE.bad, err);
    }
}