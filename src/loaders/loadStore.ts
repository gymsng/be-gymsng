import session,{Store} from "express-session"
import { SESSION_OPTIONS } from "../config"
import connectRedis from "connect-redis"
import Redis from 'ioredis'
import { Application } from "express"
import { REDIS_OPTIONS, APP_PORT } from "../config"
import chalk from "chalk"
const RedisStore = connectRedis(session)
const client = new Redis(REDIS_OPTIONS)

/**
 * attach sessions to app req, and load redis store
 * @param app the express app instance
 * 
 */
export const loadStore = (app:Application) =>{
    return new Promise((resolve,reject)=>{
       const store = new RedisStore({client})
       app.use(session({ ...SESSION_OPTIONS, store,}))
       console.log(chalk.green("store Loaded"))
       resolve()
    })
}