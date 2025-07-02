import config from "./config"
import express from "express"
import { errorMiddleware } from "./middleware"
import cors from "cors"
import router from "./router"
import cookieparser from "cookie-parser"
const app = express()

app.use(cors({
    origin: ['http://localhost:5173', 'https://annapurna-ai.vercel.app'],
    credentials: true
}))
app.use(express.json())
app.use(cookieparser())
app.use(express.urlencoded({ extended: true }))
app.use(router)
app.use(errorMiddleware)



// app.listen(config.PORT, () => {
//     console.log(`Server is running on port ${config.PORT}`)
// })

export default app