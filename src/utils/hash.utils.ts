import { hash, compare } from "bcryptjs"
import crypto from "crypto"

//To hash password with prehash(prehashed is used to effectively bypass bcrypt max byte length)
export const hashHelper = (payload: any,factor: number) => new Promise<string>(async (resolve, reject) => {
    try {
        const shaHashed = crypto.createHash('sha256').update(payload).digest("base64");
        const hashed = await hash(shaHashed, factor);
        resolve(hashed)
    } catch (err) {
        reject(err)
    }
})

//compare hashed with original value
export const compareHashed = (password:string,hashed:string) =>{
    const shaHashed:string = crypto.createHash('sha256').update(password).digest("base64");
    return compare(shaHashed,hashed)
}