import { Schema, model, Document, } from "mongoose";
import { number } from "@hapi/joi";

interface MembershipDocument extends Document {
    gym:Schema.Types.ObjectId,
    type:"workout" | "monthly" | "yearly",
    duration:number,
    price:number,  
 }
 
const MembershipSchema = new Schema({
  gym: { type:Schema.Types.ObjectId, required: [true, "user is required"] },
  type:{ type:String, default:"workout", required:[true,"you must specify a membership type"]},
  duration:{type:Number, min:[1,"you must specify a period of time"]},
  price:{type:Number, required:[true,"you must specify amount"]},
  discountPrice:{type:Number},
},{timestamps:true});

export const Memberships = model<MembershipDocument>("Memberships", MembershipSchema);
