import Save from "./Save"
import Header from "../Header"
import { useFecthallsaverecipes } from "@/hooks/useFecthallrecipes"
import { useEffect, useState } from "react"
import { SavesRecipesTypes } from "@/types"
import { SaveSkeleton } from "./SaveSkeleton"

export default function Saves() {
    const [SaveRecipes, SetSaveRecipes] = useState<SavesRecipesTypes[]>([])
    const { fecthallsaves } = useFecthallsaverecipes()
    const [loading, setLoading] = useState(true)

    const loadrecipes = async () => {
        try {
            const res = await fecthallsaves()
            SetSaveRecipes(res)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        loadrecipes()
    }, [])

    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh flex flex-col gap-8">
            <Header />
            <div className="w-[85%] mx-auto flex flex-col gap-3 overflow-y-auto">
                {loading
                    ? Array.from({ length: 3 }).map((_, index) => (
                        <SaveSkeleton key={index} />
                    ))
                    : SaveRecipes.map((SaveRecipe, index) => (
                        <Save key={index} recipe={SaveRecipe.recipe} />
                    ))}
            </div>
        </div>
    )
}
