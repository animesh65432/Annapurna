import { asyncerrorhandler } from "../../middleware"
import { Request, Response } from "express"
import db from "../../db"
import { redis } from "../../services/redis"


export const GetRecipebyId = asyncerrorhandler(async (req: Request, res: Response) => {
    const { id } = req.query

    if (!id || typeof id !== "string") {
        res.status(400).json({
            message: "invalid credentials"
        })
        return
    }

    const redisKey = `users-recipe:${req.user?.id}`;
    const cachedData = await redis.get<any>(redisKey);

    if (cachedData) {
        res.status(200).json(cachedData)
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
            dish: true,
            language: true
        }
    })

    await redis.set(redisKey, recipe, { ex: 300 })

    res.status(200).json(recipe)
    return
})