import { Request, Response } from "express"
import { generateSuggestion } from "../../utils/GenrateSuggestion"
import { GenerateRecipeByAI } from "../../utils/GenrateRecipebyAi"
import { RecipeStreamer } from "../../utils/RecipeStreamer"
import { languageMap } from "../../utils/lan"
import db from "../../db"
import { redis } from "../../services/redis"
export const generateSuggestionController = async (req: Request, res: Response) => {
    try {
        const { prompt, lan }: { prompt: string; lan: keyof typeof languageMap } = req.body

        if (!prompt || prompt.trim().length < 3) {
            res.status(200).json({ suggestions: [] })
            return
        }

        console.log(lan, "language selected")

        const language = languageMap[lan as keyof typeof languageMap] || 'english'

        console.log(language, "language selected")

        const redisKey = `suggestion:${prompt}-${language || 'english'}`;
        const cachedSuggestions = await redis.get<any>(redisKey)
        if (cachedSuggestions) {
            res.status(200).json({ suggestions: cachedSuggestions })
            return
        }
        const suggestions = await generateSuggestion(prompt, language || 'english')

        redis.set(redisKey, suggestions, { ex: 600 })
        res.status(200).json({ suggestions })
        return
    } catch (error) {
        res.status(200).json({ suggestions: [] })
        return
    }
}

export const GenrateRecipe = async (req: Request, res: Response) => {
    const { dish, variant, DishType, language } = req.query as { dish: string, variant: string, DishType: string, language: string }
    const streamer = new RecipeStreamer(res);
    try {
        if (!dish) {
            res.status(400).json({ message: "Invalid credentials" });
            return
        }

        const lang = languageMap[language as keyof typeof languageMap] || "en";

        console.log(lang, "language selected")

        streamer.send("1", 'Validating your inputs...');

        streamer.delay(1000)


        streamer.send("2", 'Crafting recipe with AI...');


        const finalVariant = variant.trim().length === 0 ? "Better" : variant.trim();
        const finalDishType = DishType.trim().length === 0 ? "any" : DishType.trim();
        const recipe = await GenerateRecipeByAI(dish, finalVariant, lang, finalDishType)


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
