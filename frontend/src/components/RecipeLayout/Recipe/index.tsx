import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
import Foodloading from "../../Foodloading"
import styles from "./Recipe.module.scss"
import { Leaf, Zap } from "lucide-react"

export default function Recipe() {
    const { recipe } = useRecipeStore()
    if (!recipe) {
        return <Foodloading />
    }
    const title = nutritionTranslations[recipe!.language]
    return (
        <>
            <div className={styles.RecipeContainer}>
                <div className={styles.ingredientsContainer}>
                    <div className={styles.ingredientHeader}>
                        <div><Leaf /></div>
                        <div className={styles.ingredientstitle}>
                            {title.ingredients}
                        </div>
                    </div>
                    <div className={styles.ingredients}>
                        {recipe?.healthierVersion.ingredients.map((ingredient) => <div className={styles.ingredient}>{ingredient}</div>)}
                    </div>
                </div>
                <div className={styles.stepsContainer}>
                    <div className={styles.stepstitle}>{title.steps}</div>
                    <div className={styles.steps}>
                        {recipe?.healthierVersion.steps.map((step, index) =>
                            <div key={index} className={styles.step}>
                                <div>{index}</div>
                                <div>{step}</div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
