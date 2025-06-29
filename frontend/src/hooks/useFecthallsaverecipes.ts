import { useState } from "react";
import { GetAll } from "../api/save"

export function useFecthallsaverecipes() {
    const [isFecthallsaverecipesloading, setisFecthallsaverecipeslaoding] = useState<boolean>(false)

    const fecthallsaves = () => {
        setisFecthallsaverecipeslaoding(true)
        try {
            const res = GetAll()
            return res
        }
        finally {
            setisFecthallsaverecipeslaoding(false)
        }
    }

    return { fecthallsaves, isFecthallsaverecipesloading }
}
