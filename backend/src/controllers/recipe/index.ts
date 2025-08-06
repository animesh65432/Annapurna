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

    const redisKey = `recipe:${id}`;

    const cachedData = await redis.get<any>(redisKey)

    if (cachedData) {
        if (cachedData) {
            res.status(200).json(cachedData)
            return
        }
    }

    const recipe = await db.recipe.findFirst({
        where: { id },
        select: {
            funFact: true,
            variant: true,
            motivationalMessage: true,
            comparison: true,
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
    const { Id, dish } = req.body;

    if (!Id || !dish) {
        res.status(400).json({ message: "Recipe ID and dish name are required" });
        return;
    }

    try {
        const pdfResponse = await axios.post(
            `${config.RECIPE_PDF_GENERATER}/genereaterecipePdf/${Id}`,
            { dish }, // Send dish name if needed
            {
                responseType: "arraybuffer",
                headers: {
                    "Content-Type": "application/json",
                },
                timeout: 30000
            }
        );

        const pdfBuffer = pdfResponse.data;
        console.log("PDF buffer length:", pdfBuffer.length);

        if (!pdfBuffer || pdfBuffer.length === 0) {
            throw new Error("Empty PDF buffer received");
        }

        const safeFilename = dish.replace(/[^\x20-\x7E]/g, '').replace(/\s+/g, '_');

        res.set({
            "Content-Type": "application/pdf",
            "Content-Disposition": `attachment; filename="${safeFilename}.pdf"`,
            "Content-Length": pdfBuffer.length,
        });

        res.send(pdfBuffer);
        return;
    } catch (error) {
        console.error("Error forwarding PDF:", error);
        res.status(500).json({ message: "Failed to generate PDF" });
        return;
    }
};