import { useParams, useLocation } from "react-router-dom"
import { useFecthrecipe } from "../../hooks/useFecthrecipes"
import styles from "./RecipeLayout.module.scss"
import Foodloading from "../Foodloading"
import Layout from "../Layout"
import { useEffect, useState } from "react"
import { useRecipeStore } from "../../store/Recipe"
import { nutritionTranslations } from "../../utils"
import Header from "./Header"
import Recipe from "./Recipe"
import WhyTheseChagnes from "./WhyTheseChagnes"
import History from "./History"

export default function RecipeLayout() {
    const { id } = useParams()
    const { setRecipe, recipe } = useRecipeStore()
    const { fetchrecipe, isFecthrecipeloading } = useFecthrecipe()
    const [currentComponent, setCurrentComponent] = useState<"recipe" | "why" | "History">("recipe")
    const location = useLocation();
    const recipestate = location.state?.recipe;
    console.log(recipestate)

    const fetch = async (id: string) => {
        if (recipestate) {
            setRecipe(recipestate)
            return
        }
        else {
            const res = await fetchrecipe(id)
            if (res) {
                setRecipe(res)
            }
        }
    }

    useEffect(() => {
        if (id) {
            fetch(id)
        }
    }, [id])

    if (isFecthrecipeloading || !recipe) {
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
                        <button
                            className={styles.NavItem}
                            onClick={() => setCurrentComponent("History")}
                        >
                            {title.History}
                        </button>
                    </div>
                </div>

                <div className={styles.MainContainer}>
                    {currentComponent === "recipe" && <Recipe />}
                    {currentComponent === "why" && <WhyTheseChagnes />}
                    {currentComponent === "History" && <History />}
                </div>
            </div>
        </Layout>
    )
}
