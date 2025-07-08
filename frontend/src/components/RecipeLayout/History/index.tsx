import { useRecipeStore } from "../../../store/Recipe"
import styles from "./History.module.scss"
import { nutritionTranslations } from "../../../utils"
import { History, Lightbulb } from "lucide-react"
export default function HistoryandFunFact() {
    const { recipe } = useRecipeStore()
    const transition = nutritionTranslations[recipe?.language!]
    return (
        <div className={styles.Container}>
            <div className={styles.HistoryContainer}>
                <div className={styles.HistoryTitle}>{transition.History}</div>
                <div className={styles.foodHistoryContext}>{recipe?.foodHistoryContext}</div>
            </div>
        </div >
    )
}
