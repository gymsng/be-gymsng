import Joi from "@hapi/joi"

const fullname = Joi.string().min(3).max(128).trim().required()
const password = Joi.string().min(8).max(128).regex(/^(?=.*?[\p{Lu}])(?=.*?[\p{Ll}])(?=.*?\d).*$/u)
    .message('"{#label}" must contain one uppercase, one lowercase, and one digit').required()
const confirmPassword = Joi.valid(Joi.ref('password'))
const email = Joi.string().email().min(8).max(254).lowercase().trim().required()

export const regSchema = Joi.object({
    fullname,
    email,
    password,
    confirmPassword
})

export const loginSchema = Joi.object({
    email,
    password
})

