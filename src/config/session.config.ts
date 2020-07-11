import { SessionOptions } from 'express-session'
import { IN_PROD } from "./index"
const ONE_HOUR = 1000 * 60 * 60
const THIRTY_MINUTES = ONE_HOUR / 2
const SIX_HOURS = ONE_HOUR * 6
const { env } = process
export const {
  SESSION_SECRET = `please keep secret`,
  SESSION_NAME = "sid",
  SESSION_IDLE_TIMEOUT = THIRTY_MINUTES
} = env

export const ABSOLUTE_SESSION_TIMEOUT = +(env.ABSOLUTE_SESSION_TIMEOUT || SIX_HOURS)

export const SESSION_OPTIONS: SessionOptions = {
  secret: SESSION_SECRET,
  name: SESSION_NAME,
  cookie: {
    maxAge: +SESSION_IDLE_TIMEOUT,
    secure: IN_PROD,
    sameSite: true,
  },
  rolling: true,
  resave: false,
  saveUninitialized: false
}