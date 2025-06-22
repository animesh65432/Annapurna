import { Router } from "express"
import { generateSuggestionController } from "../../controllers/ai"

const router = Router()

router.post("/generate-suggestion", generateSuggestionController)

export default router