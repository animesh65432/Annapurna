import { useState } from "react";
import { GetAll } from "../api/save"
import type { SavesRecipesTypes } from "../types"

export function useFecthallsaverecipes() {
    const [isFecthallsaverecipesloading, setisFecthallsaverecipeslaoding] = useState<boolean>(false)

    const fecthallsaves = async (): Promise<SavesRecipesTypes[]> => {
        setisFecthallsaverecipeslaoding(true)
        try {
            const res = await GetAll() as SavesRecipesTypes[]
            return res
        }
        finally {
            setisFecthallsaverecipeslaoding(false)
        }
    }

    return { fecthallsaves, isFecthallsaverecipesloading }
}
