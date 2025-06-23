import { Request, Response } from "express"
import { asyncerrorhandler } from "../../middleware"
import { generateSuggestion } from "../../utils/GenrateSuggestion"


export const generateSuggestionController = asyncerrorhandler(
    async (req: Request, res: Response) => {
        const { prompt } = req.body
        if (!prompt) {
            res.status(400).json({ error: "Prompt is required" })
            return
        }
        const suggestions = await generateSuggestion(prompt)
        res.status(200).json({ suggestions })
        return
    }
)

export const GenrateRecipe = asyncerrorhandler(async (req: Request, res: Response) => {
    const { dish, variant, language } = req.body

    if (!dish || !variant || !language) {
        res.status(400).json({
            message: "invalid credentials"
        })

        return
    }
})