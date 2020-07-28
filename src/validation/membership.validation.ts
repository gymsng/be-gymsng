import Joi, { ObjectSchema } from "@hapi/joi"

const genString = Joi.string().alphanum().required()
const genNumber = Joi.number().min(1).required()
const membershipSchema = Joi.object({
     gym:genString,
     type:genString,
     duration:genNumber,
     amount:genNumber,
})