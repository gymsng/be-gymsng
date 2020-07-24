import { Request, Response } from "express"
import { SESSION_NAME } from "../config"

export const isLoggedIn = (req: Request) => !!req.session!.userId
//login user
export const logIn = (req: Request, userId: string, role:number) => {
    req.session!.userId = userId
    req.session!.isAdmin = role
    req.session!.createdAt = Date.now()

}
//log out user
export const logOut = (req: Request, res: Response) => new Promise((resolve, reject) => {
    req.session!.destroy((err: Error) => {
        if (err) reject(err)

        res.clearCookie(SESSION_NAME)

        resolve();
    })
})