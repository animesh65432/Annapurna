import { RequestHandler, Router } from "express"
import { GetRecipebyId } from "../../controllers/recipe"
import { rateLimiter } from "../../middleware/ratelimiter"
import { auth } from "../../middleware/auth"

const router = Router()
router.use(auth)
router.use(rateLimiter(10, 60000) as RequestHandler)
router.get("/GetRecipe", GetRecipebyId)


export default router