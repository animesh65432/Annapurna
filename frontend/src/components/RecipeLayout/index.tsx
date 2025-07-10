import { useParams, useLocation } from "react-router-dom"
import { useFecthrecipe } from "../../hooks/useFecthrecipes"
import styles from "./RecipeLayout.module.scss"
import Foodloading from "../Foodloading"
import Layout from "../Layout"
import { useEffect } from "react"
import { useRecipeStore } from "../../store/Recipe"
import Header from "./Header"
import HealthyFoodIcon from "../../assets/HealthyfoodIcon.svg"
import Recipe from "./Recipe"
import WhyTheseChagnes from "./WhyTheseChagnes"
import History from "./History"


export default function RecipeLayout() {
    const { id } = useParams()
    const { setRecipe, recipe } = useRecipeStore()
    const { fetchrecipe, isFecthrecipeloading } = useFecthrecipe()
    const location = useLocation();
    const recipestate = location.state
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
            <div className={styles.loadingContainer}>
                <Foodloading />
            </div>
        )
    }
    return (
        <Layout>
            <div className={styles.Container}>
                <Header />
                <div className={styles.FoodtitlewithContainer}>
                    <div className={styles.Foodtitle}>
                        <div className={styles.HealthyFoodIcon}>
                            <img src={HealthyFoodIcon} />
                        </div>
                        <div>
                            {recipe.dish}
                        </div>
                    </div>
                    <div className={styles.FoodrecipeContainer}>
                        <Recipe />
                        <WhyTheseChagnes />
                        <History />
                    </div>
                </div>
            </div>
        </Layout >
    )
}
