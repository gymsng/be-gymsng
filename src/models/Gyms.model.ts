import { Schema, model, Document, } from "mongoose";
interface openings {
    open:string,
    close:string
  }
import {UserDocument} from "./User.model"
interface GymDocument extends Document {
   name: any,
   location: any,
   services: string[],
   owner: string | UserDocument,
   openings:openings[],
   description:string,
   ratings:number,
   facilities:string[],
   memberships:string[],
   category:any
 }
 
const GymSchema = new Schema({
  name: { type: String, required: [true, "gym must have a name"], unique:[true,"name already exists"], lowercase:true },
  location: { type: String, required: [true, "location cannot be empty"],lowercase:true },
  services: { type: Array, default: [] },
  owner: { type:Schema.Types.ObjectId, ref:'User' },
  openings: [{ open: { type: String }, close: { type: String } }],
  description: {type:String},
  ratings: { type: Number, max: [5, "rating cannot exceed 5"] },
  facilities: { type: Array, default: [] },
  memberships:[{type:Schema.Types.ObjectId, ref:"Memberships"}],
  category:{type:String, default:'gym'}
},{timestamps:true});

GymSchema.index({'$**':'text'})
//Hidden fields, when sending user data via json, prevents sesnsitive info from being sent
GymSchema.set('toJSON', {
  transform: (doc, { __v,owner, ...rest }) => rest
})


export const Gyms = model<GymDocument>("Gyms", GymSchema);
