import { useState } from "react";
import { GetRecipebyId } from "../api/recipe"
import type { RecipeTypes } from "../types"
import { useNavigate } from "react-router-dom"


export function useFecthrecipe() {
    const [isFecthrecipeloading, setisFecthrecipeloading] = useState<boolean>(false)
    const navigate = useNavigate()
    const fetchrecipe = async (id: string): Promise<RecipeTypes | null> => {
        setisFecthrecipeloading(true)
        try {
            const res = await GetRecipebyId(id) as RecipeTypes
            return res
        }
        catch (error) {
            navigate("/dashboard")
            return null
        }
        finally {
            setisFecthrecipeloading(false)
        }
    }

    return { fetchrecipe, isFecthrecipeloading }
}
