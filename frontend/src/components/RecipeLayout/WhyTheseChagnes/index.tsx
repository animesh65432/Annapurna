import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
import styles from "./WhyTheseChagnes.module.scss"
import { Heart, RotateCcw, ArrowBigRight, ArrowBigDown, MoveRight, CircleCheckBig } from 'lucide-react';
import { motion } from "framer-motion"
import { slideLeftFade, blurIn } from "../../../utils"
export default function WhyTheseChanges() {
    const { recipe } = useRecipeStore()
    const translation = nutritionTranslations[recipe!.language]

    const nutritionComparisonKeys = Object.keys(recipe!.nutritionComparison.after)
    const nutritionComparisonAfterValues = Object.values(recipe!.nutritionComparison.after)
    const nutritionComparisonBeforeValues = Object.values(recipe!.nutritionComparison.before)

    return (
        <div className={styles.whyTheseChanges}>
            <motion.div initial={slideLeftFade.initial} animate={slideLeftFade.animate} transition={slideLeftFade.transition} className={styles.nutritionSection}>
                <div className={styles.sectionTitle}>
                    <Heart className={styles.icon} />
                    <span>{translation.nutritionComparison}</span>
                </div>

                <div className={styles.comparisonContainer}>
                    <div className={styles.BeforcomparisonColumn}>
                        <div className={`${styles.before}`}>
                            {translation.before}
                        </div>

                        <div className={styles.BeforenutritionValues}>
                            {nutritionComparisonBeforeValues.map((value, index) => (
                                <div key={index} className={styles.BeforenutritionValue}>
                                    <span>{nutritionComparisonKeys[index]}:</span><span> {value}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <ArrowBigRight className={styles.RightArrow} />
                    <ArrowBigDown className={styles.DownArrow} />
                    <div className={styles.AftercomparisonColumn}>
                        <div className={`${styles.after}`}>
                            {translation.after}
                        </div>
                        <div className={styles.AfternutritionValues}>
                            {nutritionComparisonAfterValues.map((value, index) => (
                                <div key={index} className={styles.AfternutritionValue}>
                                    <span>{nutritionComparisonKeys[index]}:</span>
                                    <span>{value}</span>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>

            <motion.div initial={blurIn.initial} transition={blurIn.transition} animate={blurIn.animate} className={styles.substitutionsSection}>
                <div className={styles.sectionTitle}>
                    {translation.whyTheseChanges}
                </div>
                <div className={styles.substitutionsContainer}>
                    {recipe?.substitutions.map((substitution, index) => (
                        <div key={index} className={styles.substitutionCard}>
                            <div className={styles.substitutionChange}>
                                <div className={`${styles.substitutionItem} ${styles.from}`}>
                                    <span><RotateCcw /></span>
                                    {substitution.from}
                                </div>
                                <MoveRight className={styles.arrow} />
                                <div className={`${styles.substitutionItem} ${styles.to}`}>
                                    <span><CircleCheckBig /></span>{substitution.to}
                                </div>
                            </div>
                            <div className={styles.substitutionReason}>
                                <span className={styles.whyLabel}>
                                    {translation.why}
                                </span>
                                {substitution.why}
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>

            <div className={styles.funFactSection}>
                <span>{translation.funFact}</span>
                <span>{recipe?.funFact}</span>
            </div>
        </div >
    )
}