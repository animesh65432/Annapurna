import { asyncerrorhandler } from "../../middleware"
import { Request, Response } from "express"
import db from "../../db"
import { redis } from "../../services/redis"
import axios from "axios"
import config from "../../config"


export const GetRecipebyId = asyncerrorhandler(async (req: Request, res: Response) => {
    const { id } = req.query;
    if (!id || typeof id !== "string") {
        res.status(400).json({ message: "Invalid credentials" });
        return;
    }

    const isValidObjectId = (id: string) => /^[0-9a-fA-F]{24}$/.test(id);

    if (!isValidObjectId(id)) {
        res.status(400).json({ message: "Invalid recipe Url" });
        return;
    }

    const redisKey = `users-recipe:${req.user?.id}`;

    const recipe = await db.recipe.findFirst({
        where: { id },
        select: {
            funFact: true,
            variant: true,
            motivationalMessage: true,
            originalNutrition: true,
            nutritionComparison: true,
            healthierVersion: true,
            substitutions: true,
            dish: true,
            language: true,
            foodHistoryContext: true,
            id: true
        },
    });

    if (!recipe) {
        res.status(404).json({ message: "Invalid recipe Url" });
        return;
    }

    await redis.set(redisKey, recipe, { ex: 300 });

    res.status(200).json(recipe);
    return;
});

export const GenratePdf = async (req: Request, res: Response) => {
    const { recipe } = req.body;

    if (!recipe) {
        res.status(400).json({ message: "Recipe is required" });
        return
    }

    try {
        const pdfResponse = await axios.post(
            `${config.RECIPE_PDF_GENERATER}/genereaterecipePdf`,
            { recipe },
            {
                responseType: "arraybuffer",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );

        const pdfBuffer = pdfResponse.data;

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${recipe.dish}.pdf"`,
            "Content-Length": pdfBuffer.length,
        });

        res.send(pdfBuffer);
        return
    } catch (error) {
        console.error("Error forwarding PDF:", error);
        res.status(500).json({ message: "Failed to generate PDF" });
        return
    }
}