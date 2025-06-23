import config from "./config"
import express from "express"
import { errorMiddleware } from "./middleware"
import cors from "cors"
import router from "./router"
import { GenrateRecipebyAi } from "./utils/GenrateRecipebyAi"
const app = express()

app.use(cors({
    origin: ['http://localhost:5173', 'https://annapurna-ai.vercel.app'],
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(errorMiddleware)

GenrateRecipebyAi("briyani", "high protin", "english")

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}`)
})

export default app