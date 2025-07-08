import { useRecipeStore } from "../../../store/Recipe"
import styles from "./History.module.scss"
import { nutritionTranslations } from "../../../utils"
import { History, Lightbulb } from "lucide-react"
export default function HistoryandFunFact() {
    const { recipe } = useRecipeStore()
    const transition = nutritionTranslations[recipe?.language!]
    return (
        <>
            <div className={styles.HistoryContainer}>
                <div className={styles.HistoryTitle}>
                    <div >
                        <History className={styles.HistoryIcon} />
                    </div>
                    <div>{transition.History}</div>
                </div>
                <div className={styles.foodHistoryContext}>{recipe?.foodHistoryContext}</div>
            </div>
            <div className={styles.funfactContainer}>
                <div className={styles.funFactHeader}>
                    <div><Lightbulb className={styles.funfactIcon} /></div>
                    <div>{transition.funFact}</div>
                </div>
                <div className={styles.funFactsubtitle}>{recipe?.funFact}</div>
            </div>
        </>
    )
}
