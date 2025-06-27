import { Request, Response } from "express"
import { asyncerrorhandler } from "../../middleware"
import db from "../../db"
import { redis } from "../../services/redis"


export const saverecipe = asyncerrorhandler(async (req: Request, res: Response) => {
    const { Id } = req.query
    const userId = req.user?.id

    if (!Id || typeof Id !== "string" || !userId) {
        res.status(400).json({
            message: "Invaild credentials"
        })
        return
    }

    const redisKey = `saveRecipes-${userId}`

    const CheckalreadySaveOrNot = await db.save.findFirst({
        where: {
            userId,
            recipeId: Id
        }
    })

    if (CheckalreadySaveOrNot) {
        res.status(400).json({
            message: "already save it"
        })
        return
    }

    const saverecipes = db.save.create({
        data: {
            recipeId: Id,
            userId
        }
    })
    const DeleteExsitingsaverecipes = redis.del(redisKey)

    await Promise.all([saverecipes, DeleteExsitingsaverecipes])

    res.status(201).json({
        message: "sucessfully save recipe"
    })
    return
})

export const GetallSavedrecipebysUserId = asyncerrorhandler(async (req: Request, res: Response) => {
    const userId = req.user?.id
    if (!userId) {
        res.status(400).json({
            message: "Invaild credentials"
        })
        return
    }
    const redisKey = `saveRecipes-${userId}`
    const cachedData = await redis.get<any>(redisKey)

    if (cachedData) {
        res.status(200).json(cachedData)
        return
    }

    const savedrecipes = await db.save.findMany({
        where: {
            userId: userId,
        },
        select: {
            recipe: true,
        },
    });

    await redis.set(redisKey, savedrecipes)

    res.status(200).json(savedrecipes)
    return
})