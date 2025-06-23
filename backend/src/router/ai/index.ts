import { Router } from "express"
import { generateSuggestionController } from "../../controllers/ai"

const router = Router()

router.post("/generate-suggestion", generateSuggestionController)
// router.post("/generate-recipe")

export default router