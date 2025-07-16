import { Request, Response } from "express"
import { asyncerrorhandler } from "../../middleware"
import { generateSuggestion } from "../../utils/GenrateSuggestion"
import { GenrateRecipebyAi } from "../../utils/GenrateRecipebyAi"
import { isDishOrRecipe } from "../../utils/Checkdishorrecipe"
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
    const { Nutrient, dish, variant, language, DishType } = req.body;

    if (!dish || !language) {
        res.status(400).json({ message: "Invalid credentials" });
        return
    }


    const DishOrRecipe = await isDishOrRecipe(dish) as string;

    const finalNutrient = Nutrient.trim().length === 0 ? "Better" : Nutrient.trim();
    const finalVariant = variant.trim().length === 0 ? "Better" : variant.trim();
    const finalDishType = DishType.trim().length === 0 ? "Normal Dish" : DishType.trim();

    const recipe = await GenrateRecipebyAi(finalNutrient, dish, finalVariant, language, DishOrRecipe, finalDishType);


    const dbrecipe = await db.recipe.create({
        data: {
            originalNutrition: recipe.originalNutrition,
            healthierVersion: recipe.healthierVersion,
            nutritionComparison: recipe.nutritionComparison,
            substitutions: recipe.substitutions,
            motivationalMessage: recipe.motivationalMessage,
            funFact: recipe.funFact,
            dish: recipe.dish,
            variant: finalVariant,
            language,
            foodHistoryContext: recipe.foodHistoryContext,
        }
    });

    // Send response
    res.status(201).json({
        message: "Successfully created recipe",
        id: dbrecipe.id,
        recipe: { ...recipe, language, id: dbrecipe.id }
    });
    return
});
