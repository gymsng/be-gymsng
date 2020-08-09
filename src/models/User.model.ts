import { Schema, model, Document } from "mongoose";
import { userRoute } from "../routes/user.routes";
import { hashHelper, compareHashed } from "../utils/"
import { BCRYPT_WORK_FACTOR } from "../config";
import {ROLES} from "../constants"

export interface UserDocument extends Document {
  username: string,
  fullname: string,
  email: string,
  password: string,
  isAdmin:number,
  authPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema({
  username: { type: String, required: [true, "name cannot be blank"],lowercase:true },
  fullname: { type: String, required: [true, "name cannot be blank"], lowercase:true },
  email: { type: String, required: [true, "email must be provided"], lowercase:true },
  isAdmin:{type:Number, default:ROLES.USER},
  password: {
    type: String,
    required: [true, "must provide a password"],
    min: [8, "minimum password length is 8"],
    max: [128, "exceeded the max-length of passwordm"],
  },
}, {
  timestamps: true
});

//Ensure password is always hashed whenever it is modified
userSchema.pre<UserDocument>("save", async function () {
  if (this.isModified('password')) {
    this.password = await hashHelper(this.password, BCRYPT_WORK_FACTOR)
  }

})

//To confirm if provided password matches user password
userSchema.methods.authPassword = function (password: string) {
  return compareHashed(password, this.password);
}

//Hidden fields, when sending user data via json, prevents sesnsitive info from being sent
userSchema.set('toJSON', {
  transform: (doc, { __v, password,createdAt,updatedAt, ...rest }) => rest
})
export const User = model<UserDocument>('User', userSchema)