import NET from "net"
import { Application } from "express";
export function createTcpSocket(PORT:number,app:Application) {
    const server = NET.createServer();

    server.listen(PORT,()=>{
         
    })
}