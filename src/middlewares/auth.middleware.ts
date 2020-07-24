import { Request, Response, NextFunction } from "express";
import { createError } from "../utils";
import { STATUSCODE } from "../constants";
import { isLoggedIn, logOut } from "../routes"
import { ABSOLUTE_SESSION_TIMEOUT } from "../config";

// Ensure that a user must be logged out before carrying out actions like register and login
export const ensureIsLoggedOut = (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        return next(createError(STATUSCODE.UNAUTHORIZED, "you are logged in already"))
    }
    next();
}

//Ensure that a user must be logged in before carrying out any app actions
export const ensureIsLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!isLoggedIn(req)) {
        return next(createError(STATUSCODE.UNAUTHORIZED, "you must be logged in"))
    }
    next();
}

//to ensure session expiration, and avoid indefinite sessions(request bumping)
export const isActive = async (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        const now = Date.now()
        const { createdAt } = req.session as Express.Session
        if (now > createdAt + ABSOLUTE_SESSION_TIMEOUT) {
            await logOut(req, res)
            return next(createError(STATUSCODE.UNAUTHORIZED, "Session expired"))
        }
    }
    next();
}