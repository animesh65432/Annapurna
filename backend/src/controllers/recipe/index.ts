import { asyncerrorhandler } from "../../middleware"
import { Request, Response } from "express"
import db from "../../db"


export const GetRecipebyId = asyncerrorhandler(async (req: Request, res: Response) => {
    const { id } = req.query

    if (!id || typeof id !== "string") {
        res.status(400).json({
            message: "invalid credentials"
        })
        return
    }

    const recipe = await db.recipe.findFirst({
        where: {
            id
        },
        select: {
            funFact: true,
            variant: true,
            motivationalMessage: true,
            originalNutrition: true,
            nutritionComparison: true,
            healthierVersion: true,
            substitutions: true,
            dish: true
        }
    })

    res.status(200).json(recipe)
})