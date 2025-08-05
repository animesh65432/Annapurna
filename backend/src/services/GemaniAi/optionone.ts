import config from "../../config"
import { GoogleGenerativeAI } from "@google/generative-ai"
const gentAi = new GoogleGenerativeAI(config.GENAIAPIKEY as string)
export const Gemini_AI_Model_Option_1 = gentAi.getGenerativeModel({ model: "gemini-2.5-pro" })
