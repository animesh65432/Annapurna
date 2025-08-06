import { RequestHandler, Router } from "express"
import { GetRecipebyId, GenratePdf } from "../../controllers/recipe"
import { rateLimiter } from "../../middleware/ratelimiter"

const router = Router()

router.use(rateLimiter(5, 60000) as RequestHandler)
router.get("/GetRecipe", GetRecipebyId)
router.post("/GenratePdf", GenratePdf)


export default router