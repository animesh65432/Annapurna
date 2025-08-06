import config from "./config"
import express from "express"
import { errorMiddleware } from "./middleware"
import cors from "cors"
import router from "./router"


const app = express()

app.use(cors({
    origin: ["http://localhost:3000", "https://annapurna-ai-frontend.vercel.app", 'http://localhost:5173', 'https://annapurna-ai.tech', `${config.RECIPE_PDF_GENERATER}`],
    credentials: true
}))
app.use(express.json({ limit: "20mb" }))
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(errorMiddleware)


app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})
export default app