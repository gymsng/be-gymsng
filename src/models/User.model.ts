import { Schema, model, Document } from "mongoose";
import { Interface } from "readline";

interface UserDocument extends Document{
  name:string,
  email:string
  password:string
}

const userSchema = new Schema({
  name: { type: String, required: [true, "name cannot be blank"] },
  email: { type: String, required: [true, "email must be provided"] },
  password: {
    type: String,
    required: [true, "must provide a password"],
    min: [8, "minimum password length is 8"],
    max: [128, "exceeded the max-length of passwordm"],
  },
},{
  timestamps:true
});


export const User= model<UserDocument>('User',userSchema)