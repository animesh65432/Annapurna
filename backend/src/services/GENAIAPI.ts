import config from "../config"
import { GoogleGenerativeAI } from "@google/generative-ai"
const gentAi = new GoogleGenerativeAI(config.GENAIAPIKEY as string)
const AI_Model = gentAi.getGenerativeModel({ model: "gemini-2.5-pro" })


export default AI_Model