import { Request, Response } from "express"
import { generateSuggestion } from "../../utils/GenrateSuggestion"
import { GenerateRecipeByAI } from "../../utils/GenrateRecipebyAi"
import { RecipeStreamer } from "../../utils/RecipeStreamer"
import db from "../../db"
import { redis } from "../../services/redis"
export const generateSuggestionController = async (req: Request, res: Response) => {
    try {
        const { prompt } = req.body

        if (!prompt || prompt.trim().length < 3) {
            res.status(200).json({ suggestions: [] })
            return
        }

        const redisKey = `suggestion:${prompt}`
        const cachedSuggestions = await redis.get<any>(redisKey)
        if (cachedSuggestions) {
            res.status(200).json({ suggestions: cachedSuggestions })
            return
        }
        const suggestions = await generateSuggestion(prompt)

        redis.set(redisKey, suggestions, { ex: 600 })
        res.status(200).json({ suggestions })
        return
    } catch (error) {
        res.status(200).json({ suggestions: [] })
        return
    }
}

export const GenrateRecipe = async (req: Request, res: Response) => {
    const { dish, variant, DishType } = req.query as { dish: string, variant: string, DishType: string }
    const streamer = new RecipeStreamer(res);
    try {
        if (!dish) {
            res.status(400).json({ message: "Invalid credentials" });
            return
        }
        streamer.send("1", 'Validating your inputs...');

        streamer.delay(1000)


        streamer.send("2", 'Crafting recipe with AI...');


        const finalVariant = variant.trim().length === 0 ? "Better" : variant.trim();
        const finalDishType = DishType.trim().length === 0 ? "any" : DishType.trim();
        const recipe = await GenerateRecipeByAI(dish, finalVariant, "English", finalDishType)


        streamer.send("3", 'Saving recipe to kitchen database...');

        const dbrecipe = await db.recipe.create({
            data: {
                healthierVersion: recipe.healthierVersion,
                comparison: recipe.comparison,
                substitutions: recipe.substitutions,
                motivationalMessage: recipe.motivationalMessage,
                funFact: recipe.funFact,
                dish: recipe.dish,
                variant: finalVariant,
                language: "English",
                foodHistoryContext: recipe.foodHistoryContext,
            }
        });

        streamer.complete({
            id: dbrecipe.id,
            language: "English",
            recipe
        });
    } catch (error) {
        console.log(error)
        streamer.error("Error generating recipe:");
    }

}
