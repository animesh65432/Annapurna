import { useRecipeStore } from "../../../store/Recipe"
import styles from "./History.module.scss"
import { nutritionTranslations } from "../../../utils"
import { motion } from "framer-motion"
import { slideRightFade } from "../../../utils"

export default function History() {
    const { recipe } = useRecipeStore()
    const transition = nutritionTranslations[recipe?.language!]
    return (
        <div className={styles.Container}>
            <motion.div className={styles.HistoryContainer} initial={slideRightFade.initial} animate={slideRightFade.animate} transition={slideRightFade.transition}>
                <div className={styles.HistoryTitle}>{transition.History}</div>
                <div className={styles.foodHistoryContext}>{recipe?.foodHistoryContext}</div>
            </motion.div>
        </div >
    )
}
