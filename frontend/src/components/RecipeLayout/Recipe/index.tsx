import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
import styles from "./Recipe.module.scss"
import indegredientssvg from "../../../assets/ingredients.svg"
import { useState } from "react"
import rightarrow from "../../../assets/right.svg"
import recipesvg from "../../../assets/recipe.svg"

export default function Recipe() {
    const [ingredientindexs, setingredientindexs] = useState<number[]>([])
    const [stepsindexs, setstepsindexs] = useState<number[]>([])
    const { recipe } = useRecipeStore()
    const title = nutritionTranslations[recipe!.language]
    function capitalizeWords(str: string) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }

    const clickingredient = (index: number) => {
        if (ingredientindexs.includes(index)) {
            const filteringredientindexs = ingredientindexs.filter((i) => i !== index)
            setingredientindexs(filteringredientindexs)
        }
        else {
            setingredientindexs((prev) => [...prev, index])
        }
    }

    const Onclicksteps = (index: number) => {
        if (stepsindexs?.includes(index)) {
            const filterstpes = stepsindexs.filter((step) => step !== index)
            setstepsindexs(filterstpes)
        }
        else {
            setstepsindexs((prev) => [...prev, index])
        }
    }


    return (
        <div className={styles.Container}>
            <div className={styles.ingredientsContainer}>
                <div className={styles.ingredientsContainertitle}>
                    <div >
                        <img src={indegredientssvg} className={styles.ingredientsSvg} />
                    </div>
                    <div>{title.ingredients}</div>
                </div>
                <div className={styles.ingredientsGrid}>
                    {
                        recipe?.healthierVersion.ingredients.map((ingredient, index) => <div className={styles.ingredient} key={ingredient} onClick={() => clickingredient(index)}>
                            <div className={styles.Checkbox} >
                                {ingredientindexs.includes(index) && <img src={rightarrow} />}
                            </div>
                            <div> {capitalizeWords(ingredient)}</div>
                        </div>)

                    }
                </div>
            </div>
            {/* <div className={styles.RecipeContainer}>
                <div className={styles.RecipeContainertitlewithimg}>
                    <div className={styles.Recipeimg}>
                        <img src={recipesvg} className={styles.Recipeimg} />
                    </div>
                    <div className={styles.RecipeContainertitle}>
                        {title.steps}
                    </div>
                </div>
                <div className={styles.RecipeContainerSteps}>
                    {
                        recipe?.healthierVersion.steps.map((step, index) => <div className={styles.recipe} key={step}>
                            <div className={styles.Checkbox} onClick={() => Onclicksteps(index)}>
                                {stepsindexs.includes(index) && <img src={rightarrow} />}
                            </div>
                            <div className={styles.recipetext}>{step}</div>
                        </div>)
                    }
                </div>
            </div> */}
        </div>
    )
}