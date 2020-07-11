import { regSchema, validate, loginSchema } from "../validation"
import { Request, Response, NextFunction } from "express"
import { SUCCESSMESSAGE, STATUSCODE } from "../constants"
import { catchAsync } from "../middlewares"
import { createError } from "../utils"
import { User } from "../models"
import { logIn, logOut } from "../routes/auth"

//Errors are caught in catchAsync
export class userController {
    static index = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const user = await User.findById(req.session!.userId);
        return res.status(STATUSCODE.success).json({ message: "OK", data: user })
    })
    static registerUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await validate(regSchema, req.body);
        const { username, fullname, email, password } = req.body

        //check for existing user
        const existingUser = await User.exists({ email });

        if (existingUser) {
            throw createError(STATUSCODE.conflict, "invalid email")
        }
        // Create a new user if no existing
        const user = await User.create({ username, fullname, email, password })

        //Login user
        logIn(req, user.id)
        //Return response back to client
        return res.status(STATUSCODE.created).json({ status: SUCCESSMESSAGE, data: user })
    });


    static loginUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await validate(loginSchema, req.body)
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user || !await user.authPassword(password)) {
            throw createError(STATUSCODE.unauthorized, "invalid email or password")
        }
        //Login User
        logIn(req, user.id)
        return res.status(STATUSCODE.success).json({ message: "OK" });
    })
    static logOutUser = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        await logOut(req, res)
        return res.status(STATUSCODE.success).json({ message: "OK" });
    })


}