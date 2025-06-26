import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
import Foodloading from "../../Foodloading"
import styles from "./Recipe.module.scss"
import { Leaf, Zap, Star } from "lucide-react"
import { motion } from "framer-motion"
import { containerVariants, itemVariants } from "../../../utils"

export default function Recipe() {
    const { recipe } = useRecipeStore()

    if (!recipe) {
        return <Foodloading />
    }

    const title = nutritionTranslations[recipe.language]

    return (
        <div className={styles.RecipeContainer}>
            <div className={styles.ingredientsContainer}>
                <div className={styles.ingredientHeader}>
                    <div><Leaf /></div>
                    <div className={styles.ingredientstitle}>
                        {title.ingredients}
                    </div>
                </div>
                <div className={styles.ingredients}>
                    {recipe.healthierVersion.ingredients.map((ingredient, index) => (
                        <div key={index} className={styles.ingredient} >
                            <span className={styles.bullet}>•</span>
                            <span>{ingredient}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.stepsContainer}>
                <div className={styles.stepstitle}>
                    <span><Zap /></span>
                    <span className={styles.stepsTitle}>{title.steps}</span>
                </div>
                <motion.div className={styles.steps} variants={containerVariants}
                    initial="hidden"
                    animate="visible">
                    {recipe.healthierVersion.steps.map((step, index) => (
                        <motion.div key={index} className={styles.step} variants={itemVariants}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.2 }
                            }}>
                            <div className={styles.stepNumber}>{index + 1}</div>
                            <div className={styles.stepContent}>{step}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className={styles.motivationalMessage}>
                <span><Star /></span>
                <span>
                    {recipe.motivationalMessage}
                </span>
            </div>
        </div>
    )
}