import { RequestHandler, Router } from "express"
import { GetRecipebyId } from "../../controllers/recipe"
import { rateLimiter } from "../../middleware/ratelimiter"



const router = Router()


router.use(rateLimiter(10, 60000) as RequestHandler)
router.get("/GetRecipe", GetRecipebyId)


export default router