
export enum FEEDBACK { SUCCESSMESSAGE = "success", ERRORMESSAGE = "error"}

export enum STATUSCODE {
    UNAUTHORIZED = 401,             // no unauthorized access
    NOCONTENT    = 204,            // Empty content
    NOTFOUND     = 404,           // 404 resource not available
    CONFLICT     = 409,          // Resource already exists
    CREATED      = 201,         // New resource created or added
    SUCCESS      = 200,        // on successfull request
    ERROR        = 500,       // internal server error 
    BAD          = 400,      // Bad contents in request  
}

