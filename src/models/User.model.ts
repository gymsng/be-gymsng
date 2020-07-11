import { Schema, model, Document } from "mongoose";
import { userRoute } from "../routes/user.routes";
import { hashHelper, compareHashed } from "../utils/"
import { BCRYPT_WORK_FACTOR } from "../config";

interface UserDocument extends Document {
  username: string
  fullname: string
  email: string
  password: string
  authPassword: (password: string) => Promise<boolean>
}

const userSchema = new Schema({
  username: { type: String, required: [true, "name cannot be blank"] },
  fullname: { type: String, required: [true, "name cannot be blank"] },
  email: { type: String, required: [true, "email must be provided"] },
  password: {
    type: String,
    required: [true, "must provide a password"],
    min: [8, "minimum password length is 8"],
    max: [128, "exceeded the max-length of passwordm"],
  },
}, {
  timestamps: true
});

userSchema.pre<UserDocument>("save", async function () {
  if (this.isModified('password')) {
    this.password = await hashHelper(this.password, BCRYPT_WORK_FACTOR)
  }

})

userSchema.methods.authPassword = function (password: string) {
  return compareHashed(password, this.password);
}
userSchema.set('toJSON', {
  transform: (doc, { __v, password, ...rest }) => rest
})
export const User = model<UserDocument>('User', userSchema)