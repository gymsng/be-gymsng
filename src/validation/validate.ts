import { ObjectSchema } from "@hapi/joi"
import { createError } from "../utils"
import { STATUSCODE } from "../constants"


export const validate = async (schema: ObjectSchema, payload: any) => {
    try {
        await schema.validateAsync(payload, { abortEarly: false })
    } catch (err) {
        throw createError(STATUSCODE.BAD, err);
    }
}