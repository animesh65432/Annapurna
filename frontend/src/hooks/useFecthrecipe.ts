import { useState } from "react";
import { GetRecipebyId } from "../api/recipe"
import type { AnalysisRecipe } from "../types"


export function useFecthrecipe() {
    const [isFecthrecipeloading, setisFecthrecipeloading] = useState<boolean>(false)
    const fetchrecipe = async (id: string): Promise<AnalysisRecipe> => {
        setisFecthrecipeloading(true)
        try {
            const res = await GetRecipebyId(id) as AnalysisRecipe
            return res
        }
        finally {
            setisFecthrecipeloading(false)
        }
    }

    return { fetchrecipe, isFecthrecipeloading }
}
