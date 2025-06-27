import { Request, Response } from "express"
import { asyncerrorhandler } from "../../middleware"
import db from "../../db"


export const saverecipe = asyncerrorhandler(async (req: Request, res: Response) => {
    const { Id } = req.query
    const userId = req.user?.id

    if (!Id || typeof Id !== "string" || !userId) {
        res.status(400).json({
            message: "Invaild credentials"
        })
        return
    }

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

    await db.save.create({
        data: {
            recipeId: Id,
            userId
        }
    })

    res.status(201).json({
        message: "sucessfully save recipe"
    })
    return
})

export const GetallrecipebysUserId = asyncerrorhandler(async (req: Request, res: Response) => {
    const userId = req.user?.id
    if (!userId) {
        res.status(400).json({
            message: "Invaild credentials"
        })
        return
    }

    const recipes = await db.save.findMany({
        where: {
            userId: userId,
        },
        select: {
            recipe: true,
        },
    });

    res.status(200).json(recipes)
    return
})