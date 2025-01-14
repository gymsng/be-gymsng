import { ConnectionOptions } from "mongoose"

export const {
MONGO_USERNAME = 'admin',
MONGO_PASSWORD = 'secret',
MONGO_HOST = 'localhost',
MONGO_PORT = '27017',
MONGO_DATABASE = 'auth',
RemoteDb 
} = process.env;

export const MONGO_URL = `mongodb://${MONGO_USERNAME}:${
    encodeURIComponent(MONGO_PASSWORD)
}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DATABASE}`


export const MONGO_OPTIONS: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
}