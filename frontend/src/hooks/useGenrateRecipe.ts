import { useState } from "react";
import { GenrateRecipe } from "../api/ai"
import type { RecipeTypes } from "../types"


export const useGenrateRecipe = () => {
    const [isGenrateRecipeloading, setisGenrateRecipeloading] = useState<boolean>(false)
    const [issucessed, setisucessed] = useState<boolean>(false)
    const createRecipe = async (Calories: string, Cabs: string, dish: string, variant: string, language: string): Promise<{ id: string, recipe: RecipeTypes }> => {
        setisGenrateRecipeloading(true)
        const res = await GenrateRecipe(Calories, Cabs, dish, variant, language) as { id: string, recipe: RecipeTypes }
        setisucessed(true)
        return res
    }

    return { isGenrateRecipeloading, createRecipe, issucessed, setisGenrateRecipeloading }

}

export default useGenrateRecipe