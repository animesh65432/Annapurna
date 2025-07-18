import "dotenv/config"

const config = {
    PORT: process.env.PORT,
    GENAIAPIKEY: process.env.GENAIAPIKEY,
    GroqApiKey: process.env.GR0QAPIKEY,
    JWT_SECRET: process.env.JWT_SECRET,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    RECIPE_PDF_GENERATER: process.env.RECIPE_PDF_GENERATER,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    REPLIATE_API_TOKEN: process.env.REPLIATE_API_TOKEN,
    HUGGINGFACEAPI: process.env.HUGGINGFACEAPI
}

export default config