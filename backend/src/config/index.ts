import "dotenv/config"

const config = {
    PORT: process.env.PORT,
    GENAIAPIKEY: process.env.GENAIAPIKEY,
    GroqApiKey: process.env.GR0QAPIKEY,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config