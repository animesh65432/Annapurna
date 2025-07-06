import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
import styles from "./Recipe.module.scss"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../../../utils"
import indegredientssvg from "../../../assets/ingredients.svg"
import { useState } from "react"
import rightarrow from "../../../assets/right.svg"

export default function Recipe() {
    const [ingredientindexs, setingredientindexs] = useState<number[]>([])
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


    return (
        <div className={styles.ingredientsContainer}>
            <div className={styles.ingredientsContainertitle}>
                <div className={styles.ingredientsSvg}>
                    <img src={indegredientssvg} />
                </div>
                <div>{title.ingredients}</div>
            </div>
            <div className={styles.ingredientsGrid}>
                {
                    recipe?.healthierVersion.ingredients.map((ingredient, index) => <div className={styles.ingredient} key={ingredient} onClick={() => clickingredient(index)}>
                        <div className={styles.ingredientCheckbox} >
                            {ingredientindexs.includes(index) && <img src={rightarrow} />}
                        </div>
                        <div> {capitalizeWords(ingredient)}</div>
                    </div>)

                }
            </div>
        </div>
    )
}