import { RequestHandler, Router } from "express"
import { GetallSavedrecipebysUserId, saverecipe } from "../../controllers/save"
import { auth } from "../../middleware/auth"
import { rateLimiter } from "../../middleware/ratelimiter"

const saverouter = Router()

saverouter.use(auth)


saverouter.use(rateLimiter(10, 60000) as RequestHandler)
saverouter.get("/Get", GetallSavedrecipebysUserId)
saverouter.post("/add", saverecipe)

export default saverouter