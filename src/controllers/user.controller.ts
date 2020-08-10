import { regSchema, validate, loginSchema } from "../validation"
import { STATUSCODE, ROLES } from "../constants"
import { catchAsync } from "../middlewares"
import { createError } from "../utils"
import { User } from "../models"
import { logIn, logOut } from "../routes/auth"

//Errors are caught in catchAsync
export class userController {
    static index = catchAsync(async (req, res, next) => {
        const user = await User.findById(req.session!.userId);
        return res.status(STATUSCODE.SUCCESS).json({ error: false, message: "OK", data: user })
    })


    static registerUser = catchAsync(async (req, res, next) => {
        await validate(regSchema, req.body);
        const { fullname, email, password, isAdmin } = req.body

        //check for existing user
        const existingUser = await User.exists({ email });

        if (existingUser) {
            throw createError(STATUSCODE.CONFLICT, "invalid email")
        }
        // Create a new user if no existing
        const user = await User.create({  fullname, email, password, isAdmin: 0 })

        //Login user
        logIn(req, user.id, user.isAdmin)
        //Return response back to client
        return res.status(STATUSCODE.CREATED).json({ error: false, data: user })
    });



    static registerAdmin = catchAsync(async (req, res, next) => {
        await validate(regSchema, req.body);
        const {  fullname, email, password } = req.body

        //check for existing user
        const existingUser = await User.exists({ email });

        if (existingUser) {
            throw createError(STATUSCODE.CONFLICT, "invalid email")
        }
        // Create a new admin user if no existing
        const newAdmin = await User.create({ fullname, email, password, isAdmin: 1 })

        //Login admin user
        logIn(req, newAdmin.id, newAdmin.isAdmin)
        //Return response back to client
        return res.status(STATUSCODE.CREATED).json({ error: false, data: newAdmin })
    });


    static registerSuperAdmin = catchAsync(async (req, res, next) => {
        await validate(regSchema, req.body)
        const { fullname, email, password } = req.body
        const { isAdmin } = req.session!

        if (isAdmin !== ROLES.SUPERADMIN) {
            throw createError(STATUSCODE.UNAUTHORIZED, "you cant create a Super admin");
        }
        //check for existing user
        const existingUser = await User.exists({ email });

        if (existingUser) {
            throw createError(STATUSCODE.CONFLICT, "invalid email")
        }
        // Create a new user if no existing
        const newSuperAdmin = await User.create({ fullname, email, password, isAdmin: ROLES.SUPERADMIN })
        //Return response back to client
        return res.status(STATUSCODE.CREATED).json({ error: false, data: newSuperAdmin })
    });

    static loginUser = catchAsync(async (req, res, next) => {
        await validate(loginSchema, req.body)
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user || !await user.authPassword(password)) {
            throw createError(STATUSCODE.BAD, "invalid email or password")
        }
        //Login User
        logIn(req, user.id, user.isAdmin)
        return res.status(STATUSCODE.SUCCESS).json({ error: false, message: "OK", data: user });
    })

    static logOutUser = catchAsync(async (req, res, next) => {
        await logOut(req, res)
        return res.status(STATUSCODE.SUCCESS).json({ error: false, message: "OK" });
    })


}