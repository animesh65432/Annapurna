import { useState } from "react";
import { GenrateRecipe } from "../api/ai"
import type { RecipeTypes } from "@/types"

export const useGenrateRecipe = () => {
    const [isGenrateRecipeloading, setisGenrateRecipeloading] = useState<boolean>(false)
    const [issucessed, setisucessed] = useState<boolean>(false)
    const createRecipe = async (dish: string, variant: string, DishType: string): Promise<{ id: string, recipe: RecipeTypes } | null> => {
        setisGenrateRecipeloading(true)
        try {
            const res = await GenrateRecipe(dish, variant, DishType) as { id: string, recipe: RecipeTypes }
            setisucessed(true)
            return res
        } catch (error) {
            setisGenrateRecipeloading(false)
            return null
        }
    }

    return { isGenrateRecipeloading, createRecipe, issucessed, setisGenrateRecipeloading }

}

export default useGenrateRecipe