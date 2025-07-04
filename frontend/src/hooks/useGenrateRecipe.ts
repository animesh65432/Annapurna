import { useState } from "react";
import { GenrateRecipe } from "../api/ai"


export const useGenrateRecipe = () => {
    const [isGenrateRecipeloading, setisGenrateRecipeloading] = useState<boolean>(false)
    const [issucessed, setisucessed] = useState<boolean>(false)
    const createRecipe = async (dish: string, variant: string, language: string): Promise<{ id: string }> => {
        setisGenrateRecipeloading(true)
        const res = await GenrateRecipe(dish, variant, language) as { id: string }
        setisucessed(true)
        return res
    }

    return { isGenrateRecipeloading, createRecipe, issucessed, setisGenrateRecipeloading }

}

export default useGenrateRecipe