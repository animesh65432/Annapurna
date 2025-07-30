import { useState } from "react";
import { GetAll } from "../api/save"
import { useAuthstore } from "@/store/useauth";
import type { SavesRecipesTypes } from "@/types"

export function useFecthallsaverecipes() {
    const { token } = useAuthstore()
    const [isFecthallsaverecipesloading, setisFecthallsaverecipeslaoding] = useState<boolean>(false)

    const fecthallsaves = async (): Promise<SavesRecipesTypes[]> => {
        setisFecthallsaverecipeslaoding(true)
        try {
            const res = await GetAll(token!) as SavesRecipesTypes[]
            return res
        }
        finally {
            setisFecthallsaverecipeslaoding(false)
        }
    }

    return { fecthallsaves, isFecthallsaverecipesloading }
}