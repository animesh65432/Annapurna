import { useParams } from "react-router-dom"
import { useFecthrecipe } from "../../hooks/useFecthrecipe"
import styles from "./RecipeLayout.module.scss"
import Foodloading from "../Foodloading"
import Layout from "../Layout"
import { useEffect, useState } from "react"
import { useRecipeStore } from "../../store/Recipe"
import { nutritionTranslations } from "../../utils"
import Header from "./Header"
import Recipe from "./Recipe"
import WhyTheseChagnes from "./WhyTheseChagnes"

export default function RecipeLayout() {
    const { id } = useParams()
    const { setRecipe, recipe } = useRecipeStore()
    const { fetchrecipe, isFecthrecipeloading } = useFecthrecipe()
    const [currentComponent, setCurrentComponent] = useState<"recipe" | "why">("recipe")

    const fetch = async (id: string) => {
        const res = await fetchrecipe(id)
        setRecipe(res)
    }

    useEffect(() => {
        if (id) {
            fetch(id)
        }
    }, [id])

    if (!id || isFecthrecipeloading || !recipe) {
        return (
            <Foodloading />
        )
    }

    const title = nutritionTranslations[recipe.language]

    return (
        <Layout>
            <div className={styles.Container}>
                <div className={styles.HeaderContainer}>
                    <Header />
                    <div className={styles.Navbar}>
                        <button
                            className={styles.NavItem}
                            onClick={() => setCurrentComponent("recipe")}
                        >
                            {title.recipe}
                        </button>
                        <button
                            className={styles.NavItem}
                            onClick={() => setCurrentComponent("why")}
                        >
                            {title.whyTheseChanges}
                        </button>
                    </div>
                </div>

                <div className={styles.MainContainer}>
                    {currentComponent === "recipe" && <Recipe />}
                    {currentComponent === "why" && <WhyTheseChagnes />}
                </div>
            </div>
        </Layout>
    )
}
