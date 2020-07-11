import { RequestHandler, Request, Response, NextFunction } from "express";
export const catchAsync = (handler: RequestHandler) =>
  (...args: [Request, Response, NextFunction]) => handler(...args).catch(args[2]);

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ message: "not found" });
}

export const ServerError = (err: any, req: Request, res: Response, next: NextFunction) => {
  if (!err.status) {
    console.log(err)
  }
  res.status(err.status || 500).json({ success: false, message: err.message || "internal server errors" });
}