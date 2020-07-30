export const {
    NODE_ENV = 'development',
    PORT = 5000
} = process.env

export const IN_PROD = NODE_ENV == "production"