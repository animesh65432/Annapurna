import { RequestHandler, Router } from "express"
import { generateSuggestionController, GenrateRecipe } from "../../controllers/ai"
import { Detectdishes } from "../../controllers/checkrecipe"
import { rateLimiter } from "../../middleware/ratelimiter"

const router = Router()
rateLimiter(5, 60000) as RequestHandler
router.post("/generate-suggestion", generateSuggestionController)
router.get("/generate-recipe", GenrateRecipe)
router.post("/detectdishes", Detectdishes)

export default router