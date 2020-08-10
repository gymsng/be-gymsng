import { Schema, model, Document, } from "mongoose";
import { number } from "@hapi/joi";

export interface MembershipDocument extends Document {
    gymid:Schema.Types.ObjectId | string,
    type:"workout" | "monthly" | "yearly",
    duration:number,
    price:string, 
   
}
 
const MembershipSchema = new Schema({
  gymid: { type:Schema.Types.ObjectId, ref:'Gyms',  required: [true, "gym is required"] },
  type:{ type:String, default:"workout", required:[true,"you must specify a membership type"]},
  duration:{type:Number, min:[1,"you must specify a period of time"]},
  price:{type:String, required:[true,"you must specify price"]},
  discountPrice:{type:Number},
},{timestamps:true});

export const Memberships = model<MembershipDocument>("Memberships", MembershipSchema);
