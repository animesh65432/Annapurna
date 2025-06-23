import { Router } from "express"
import { generateSuggestionController, GenrateRecipe } from "../../controllers/ai"

const router = Router()

router.post("/generate-suggestion", generateSuggestionController)
router.post("/generate-recipe", GenrateRecipe)

export default router