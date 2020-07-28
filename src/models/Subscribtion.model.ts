import { Schema, model, Document, } from "mongoose";

interface SubscribtionDocument extends Document {
    membership:Schema.Types.ObjectId,
    user:Schema.Types.ObjectId
    status:"pending" | "active" | "expired";
 }
 
const SubscribtionSchema = new Schema({
  user: { type:Schema.Types.ObjectId, ref:"User",required: [true, "user is required"] },
  membership:{type:Schema.Types.ObjectId, ref:"Membership", required:[true,"membership is required"]},
  status:{type:String,default:"pending"}
},{timestamps:true});

export const Bookings = model<SubscribtionDocument>("Bookings", SubscribtionSchema);
