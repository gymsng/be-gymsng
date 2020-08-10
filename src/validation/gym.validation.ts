import Joi from "@hapi/joi"

const name = Joi.string().min(3).max(30).required()
const description = Joi.string().min(3).max(255).required()
const location = Joi.string().min(3).max(30).required()
const services = Joi.array()
const owner = Joi.string().min(3).max(30).required()
const ratings = Joi.number().min(0).max(5)
const openings = Joi.array().required()
const facilities = Joi.array()

export const gymSchema = Joi.object({
    name,
    description,
    location, 
    services,
    ratings,
    openings,
    facilities
})
