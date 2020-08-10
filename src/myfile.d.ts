import {Express} from "express-serve-static-core";
import {Schema} from 'mongoose'
declare module 'express-serve-static-core' {
    interface Request {
      gymid?: Schema.Types.ObjectId | string
    } 
  }