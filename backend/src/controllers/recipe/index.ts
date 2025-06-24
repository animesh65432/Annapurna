import { asyncerrorhandler } from "../../middleware"
import { Request, Response } from "express"
import db from "../../db"


export const GetRecipebyId = asyncerrorhandler(async (req: Request, res: Response) => {
    const { id } = req.params

    const recipe = await db.recipe.findFirst({
        where: {
            id
        }
    })

    res.status(200).json(recipe)
})