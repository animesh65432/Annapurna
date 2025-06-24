import { Router } from "express"
import { GetRecipebyId } from "../../controllers/recipe"

const router = Router()

router.get("/GetRecipe", GetRecipebyId)

export default router