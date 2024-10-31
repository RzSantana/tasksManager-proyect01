import dotenv from 'dotenv'

dotenv.config()

const ENV = {
    port: process.env.PORT,
    dbUri: process.env.DB_URI,
    apiKeyL: process.env.API_KEY,
    jwtSecret: process.env.JWT_SECRET,
}

export default ENV