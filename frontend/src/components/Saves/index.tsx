import Layout from "../Layout"
import { useFecthallsaverecipes } from "../../hooks/useFecthallsaverecipes"
import { useEffect, useState } from "react"
import SavesSkeleton from "./SavesSkeleton"
import type { SavesRecipesTypes } from "../../types"
import Save from "./Save"
import styles from "./Saves.module.scss"

export default function Saves() {
    const [SavesRecipes, SetSavesRecipes] = useState<SavesRecipesTypes[]>([])
    const { fecthallsaves, isFecthallsaverecipesloading } = useFecthallsaverecipes()
    const fecth = async () => {
        const res = await fecthallsaves()
        SetSavesRecipes(res)
    }

    useEffect(() => {
        fecth()
    }, [])
    return (
        <Layout>
            {isFecthallsaverecipesloading ?
                <SavesSkeleton /> :
                <div className={styles.Container}>
                    {SavesRecipes.length > 0 ? SavesRecipes.map((saveRecipe, index) => <Save key={index} SavesRecipe={saveRecipe} />) : <div className={styles.NotFoundContainer}><p>did't save any recipe</p></div>}
                </div>
            }
        </Layout>
    )
}
