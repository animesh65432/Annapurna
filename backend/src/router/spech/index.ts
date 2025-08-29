import { RequestHandler, Router } from "express"
import { rateLimiter } from "../../middleware/ratelimiter"
import { translatespech } from "../../controllers/spech"

const router = Router()

router.use(rateLimiter(5, 60 * 1000) as RequestHandler)

router.post("/translatespech", translatespech)

export default router


