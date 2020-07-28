import Joi, { ObjectSchema } from "@hapi/joi"

const genString = Joi.string().alphanum().required()
const genNumber = Joi.number().min(1).required()
const subscribtionSchema = Joi.object({
    user:genString,
    membership:genString,   
    staus:genString,
})