import { Router } from "express"
import ai from "./ai"
import recipe from "./recipe"
import userauth from "./auth"
import save from "./save"

const router = Router()

router.use("/auth", userauth)
router.use("/ai", ai)
router.use("/recipe", recipe)
router.use("/save", save)

export default router