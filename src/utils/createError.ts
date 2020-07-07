/**
 * CREATES AN ERROR OBJECT THAT HANDLES BOTH INTERNAL AND SERVER ERRORS
 * ERROR OBJECTS INHERITS FROM BOTH JS NATIVE ERROR AND HAVE EXTRA
 * FIELD STATUS TO KNOW IF IT'S A REQUEST ERROR
 * 
 * @param  {number} status The request status
 * @param  {string} message The message to be returned
 * @return {Object} error object
 * 
 */

export function createError(status:number, message:string) {
    const error = new AppError(message);
    error.status = status;
    return error;
  }

export class AppError  extends Error implements AppErrorInterface{
   public status:any
   constructor(message:string){
       super(message)
       this.status = 0
   }
    
}
export interface AppErrorInterface extends Error{
    status:number
}
