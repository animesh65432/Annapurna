import { RequestHandler, Router } from "express"
import { generateSuggestionController, GenrateRecipe } from "../../controllers/ai"
import { rateLimiter } from "../../middleware/ratelimiter"

const router = Router()

// router.use(rateLimiter(5, 60 * 1000) as RequestHandler)
router.post("/generate-suggestion", generateSuggestionController)
router.post("/generate-recipe", GenrateRecipe)

export default router