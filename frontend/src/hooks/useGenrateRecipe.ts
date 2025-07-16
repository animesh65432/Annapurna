import { useState } from "react";
import { GenrateRecipe } from "../api/ai"
import type { RecipeTypes } from "../types"
import { useNavigate } from "react-router-dom"

export const useGenrateRecipe = () => {
    const [isGenrateRecipeloading, setisGenrateRecipeloading] = useState<boolean>(false)
    const [issucessed, setisucessed] = useState<boolean>(false)
    const navigate = useNavigate()
    const createRecipe = async (Nutrient: string, dish: string, variant: string, language: string, DishType: string): Promise<{ id: string, recipe: RecipeTypes } | null> => {
        setisGenrateRecipeloading(true)
        try {
            const res = await GenrateRecipe(Nutrient, dish, variant, language, DishType) as { id: string, recipe: RecipeTypes }
            setisucessed(true)
            return res
        } catch (error) {
            navigate("/")
            setisGenrateRecipeloading(false)
            return null
        }
    }

    return { isGenrateRecipeloading, createRecipe, issucessed, setisGenrateRecipeloading }

}

export default useGenrateRecipe