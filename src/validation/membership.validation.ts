import Joi, { ObjectSchema } from "@hapi/joi"

const genString = Joi.string().alphanum().required()
const genNumber = Joi.string().min(1).required()
export const membershipSchema = Joi.object({
     type:genString,
     duration:genNumber,
     price:genNumber,
})