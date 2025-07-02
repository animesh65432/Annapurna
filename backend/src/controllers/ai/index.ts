import { Request, Response } from "express"
import { asyncerrorhandler } from "../../middleware"
import { generateSuggestion } from "../../utils/GenrateSuggestion"
import { GenrateRecipebyAi } from "../../utils/GenrateRecipebyAi"
import db from "../../db"


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

    const recipe = await GenrateRecipebyAi(dish, variant, language)


    const dbrecipe = await db.recipe.create({
        data: {
            originalNutrition: recipe.originalNutrition,
            healthierVersion: recipe.healthierVersion,
            nutritionComparison: recipe.nutritionComparison,
            substitutions: recipe.substitutions,
            motivationalMessage: recipe.motivationalMessage,
            funFact: recipe.funFact,
            dish: recipe.dish,
            variant,
            language,
            foodHistoryContext: recipe.foodHistoryContext,
        }
    })
    res.status(201).json({
        message: "sucessfully create it",
        id: dbrecipe.id,
        recipe: { ...recipe, language }
    })
    return
})
