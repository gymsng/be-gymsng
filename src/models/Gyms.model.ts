import { Schema, model, Document } from "mongoose";
interface openings {
    open:string,
    close:string
  }

interface GymDocument extends Document {
   name: string,
   location: string,
   services: string[],
   owner: string,
   openings:openings[],
   description:string,
   ratings:number,
   facilities:string[],
 }
 
const GymSchema = new Schema({
  name: { type: String, required: [true, "gym must have a name"] },
  location: { type: String, required: [true, "location cannot be empty"] },
  services: { type: Array, default: [] },
  owner: { type: String, required: [true, "owner should be known"] },
  openings: [{ open: { type: String }, close: { type: String } }],
  description: {type:String},
  ratings: { type: Number, max: [5, "rating cannot exceed 5"] },
  facilities: { type: Array, default: [] },
});

export const Gyms = model<GymDocument>("Gyms", GymSchema);
