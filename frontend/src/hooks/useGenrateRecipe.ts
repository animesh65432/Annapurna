import { useState } from "react";
import { GenrateRecipe } from "../api/ai"


export const useGenrateRecipe = () => {
    const [isGenrateRecipeloading, setisGenrateRecipeloading] = useState<boolean>(false)
    const [issucessed, setisucessed] = useState<boolean>(false)
    const createRecipe = async (dish: string, variant: string, language: string) => {
        setisGenrateRecipeloading(true)
        try {
            await GenrateRecipe(dish, variant, language)
            setisucessed(true)
        }
        finally {
            setisGenrateRecipeloading(false)
        }
    }

    return { isGenrateRecipeloading, createRecipe, issucessed }

}

export default useGenrateRecipe