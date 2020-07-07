import { Interface } from "readline"
import { number } from "@hapi/joi"

export const SUCCESSMESSAGE:string = "success" 

export const ERRORMESSAGE:string = "error"

export const STATUSCODE = {
    success: 200,        // on successfull request
    error: 500,          // internal server error
    notfound: 404,       // 404 resource not available
    unauthorized: 401, // no unauthorized access
    conflict: 409,     // Resource already exists
    created: 201,      // New resource created or added
    bad: 400,          // Bad contents in request
    nocontent: 204,    // Empty content
}

