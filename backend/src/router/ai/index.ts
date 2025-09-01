import { RequestHandler, Router } from "express"
import { generateSuggestionController, GenrateRecipe } from "../../controllers/ai"
import { Detectdishes } from "../../controllers/checkrecipe"
import { rateLimiter } from "../../middleware/ratelimiter"

const router = Router()

router.post("/generate-suggestion", generateSuggestionController)
router.get("/generate-recipe", rateLimiter(5, 60000) as RequestHandler, GenrateRecipe)
router.post("/detectdishes", rateLimiter(5, 60000) as RequestHandler, Detectdishes)

export default router