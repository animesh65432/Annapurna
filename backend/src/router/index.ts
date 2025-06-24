import { Router } from "express"
import ai from "./ai"
import recipe from "./recipe"

const router = Router()

router.use("/ai", ai)
router.use("/recipe", recipe)

export default router