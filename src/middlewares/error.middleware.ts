import { RequestHandler, Request, Response, NextFunction } from "express";
import mongoose from "mongoose"
import { STATUSCODE } from "../constants";
export const catchAsync = (handler: RequestHandler) =>
  (...args: [Request, Response, NextFunction]) => handler(...args).catch(args[2]);

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({error:true, message: "not found" });
}

export const ServerError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err.status && !isMongooseCastError(err)) {
    console.log(err)
  }
  if (isMongooseCastError(err)){
    return res.status(STATUSCODE.BAD).json({error:true,message:"invalid id"});
  }        
  res.status(err.status || 500).json({ error:true, message: err.message || "internal server errors" });
}

const isMongooseCastError = (err:any) =>err instanceof mongoose.Error.CastError
