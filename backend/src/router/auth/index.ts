import { RequestHandler, Router } from "express"
import { rateLimiter } from "../../middleware/ratelimiter"
import { googleAuth } from "../../controllers/user"

const userauth = Router()

userauth.use(rateLimiter(10, 60000) as RequestHandler)
userauth.post("/googeauth", googleAuth)


export default userauth