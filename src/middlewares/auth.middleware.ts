import { Request, Response, NextFunction } from "express";
import { createError } from "../utils";
import { STATUSCODE } from "../constants";
import { isLoggedIn, logOut } from "../routes"
import { ABSOLUTE_SESSION_TIMEOUT } from "../config";
export const ensureIsLoggedOut = (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        return next(createError(STATUSCODE.bad, "you are logged in already"))
    }
    next();
}

export const ensureIsLoggedIn = (req: Request, res: Response, next: NextFunction) => {
    if (!isLoggedIn(req)) {
        return next(createError(STATUSCODE.unauthorized, "you must be logged in"))
    }
    next();
}

export const isActive = async (req: Request, res: Response, next: NextFunction) => {
    if (isLoggedIn(req)) {
        const now = Date.now()
        const { createdAt } = req.session as Express.Session

        if (now > createdAt + ABSOLUTE_SESSION_TIMEOUT) {
            await logOut(req, res)
            return next(createError(STATUSCODE.unauthorized, "Session expired"))
        }

    }
    next();
}