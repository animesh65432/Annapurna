import { useState } from "react";
import { GetRecipebyId } from "../api/recipe"
import type { RecipeTypes } from "../types"


export function useFecthrecipe() {
    const [isFecthrecipeloading, setisFecthrecipeloading] = useState<boolean>(false)
    const fetchrecipe = async (id: string): Promise<RecipeTypes> => {
        setisFecthrecipeloading(true)
        try {
            const res = await GetRecipebyId(id) as RecipeTypes
            return res
        }
        finally {
            setisFecthrecipeloading(false)
        }
    }

    return { fetchrecipe, isFecthrecipeloading }
}
