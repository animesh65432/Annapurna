import { Request, Response } from "express"
import { asyncerrorhandler } from "../../middleware"
import { generateSuggestion } from "../../utils/GenrateSuggestion"
import { GenrateRecipebyAi } from "../../utils/GenrateRecipebyAi"
import { isDishOrRecipe } from "../../utils/Checkdishorrecipe"
import { GetsuggestionsArrays } from "../../utils/findthenindgridentlink"
import { usefindimgformgoogle } from "../../utils/useFindimg"
import db from "../../db"

export const generateSuggestionController = async (req: Request, res: Response) => {
    try {
        const { prompt } = req.body
        if (!prompt) {
            res.status(400).json({ error: "Prompt is required" })
            return
        }
        const suggestions = await generateSuggestion(prompt)
        res.status(200).json({ suggestions })
        return
    } catch (error) {
        res.status(200).json({ suggestions: [] })
        return
    }
}

export const GenrateRecipe = asyncerrorhandler(async (req: Request, res: Response) => {
    const { dish, variant, DishType } = req.body;

    if (!dish) {
        res.status(400).json({ message: "Invalid credentials" });
        return
    }

    const DishOrRecipe = await isDishOrRecipe(dish) as string;

    const finalVariant = variant.trim().length === 0 ? "Better" : variant.trim();
    const finalDishType = DishType.trim().length === 0 ? "Normal Dish" : DishType.trim();

    const recipe = await GenrateRecipebyAi(dish, finalVariant, "English", DishOrRecipe, finalDishType);
    const suggestionsInGredients = await GetsuggestionsArrays(recipe.healthierVersion.ingredients)
    const imageLink = await usefindimgformgoogle(recipe.dish)
    const dbrecipe = await db.recipe.create({
        data: {
            originalNutrition: recipe.originalNutrition,
            healthierVersion: { ...recipe.healthierVersion, suggestionsInGredients },
            nutritionComparison: recipe.nutritionComparison,
            substitutions: recipe.substitutions,
            motivationalMessage: recipe.motivationalMessage,
            funFact: recipe.funFact,
            dish: recipe.dish,
            variant: finalVariant,
            language: "English",
            foodHistoryContext: recipe.foodHistoryContext,
            Img: imageLink,
        }
    });
    res.status(201).json({
        message: "Successfully created recipe",
        recipe: { ...recipe, language: "English", Img: imageLink, suggestionsInGredients },
        id: dbrecipe.id
    });
    return
});
