import { hash, compare } from "bcryptjs"
import crypto from "crypto"
import { rejects } from "assert"
import { resolve } from "path";

export const hashHelper = (payload: any,factor: number) => new Promise<string>(async (resolve, reject) => {
    try {
        const shaHashed:string = crypto.createHash('sha256').update(payload).digest("base64");
        const hashed:string = await hash(shaHashed, factor);
        resolve(hashed)
    } catch (err) {
        reject(err)
    }
})

export const compareHashed = (password:string,hashed:string) =>{
    const shaHashed:string = crypto.createHash('sha256').update(password).digest("base64");
    return compare(shaHashed,hashed);
}