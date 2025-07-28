import { useState } from "react";
import { GetRecipebyId } from "@/api/recipe"
import type { RecipeTypes } from "../types"
import { useRouter } from "next/router"


export function useFecthrecipe() {
    const [isFecthrecipeloading, setisFecthrecipeloading] = useState<boolean>(false)
    const router = useRouter()
    const fetchrecipe = async (id: string): Promise<RecipeTypes | null> => {
        setisFecthrecipeloading(true)
        try {
            const res = await GetRecipebyId(id) as RecipeTypes
            return res
        }
        catch (error) {
            router.push("/")
            return null
        }
        finally {
            setisFecthrecipeloading(false)
        }
    }

    return { fetchrecipe, isFecthrecipeloading }
}