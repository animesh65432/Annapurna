import { useRecipeStore } from "../../../store/Recipe"
import styles from "./WhyTheseChagnes.module.scss"
import { Heart, RotateCcw, MoveRight, ArrowDownUp } from 'lucide-react';
import { BiQuestionMark } from "react-icons/bi";
import { X, CheckCheck, ArrowRightLeft } from "lucide-react"
import { nutritionTranslations, blurIn, slideLeftFade } from "../../../utils"
import { motion } from "framer-motion"

export default function WhyTheseChanges() {
    const { recipe } = useRecipeStore()
    const translation = nutritionTranslations[recipe!.language]

    const nutritionComparisonKeys = Object.keys(recipe!.nutritionComparison.after)
    const nutritionComparisonAfterValues = Object.values(recipe!.nutritionComparison.after)
    const nutritionComparisonBeforeValues = Object.values(recipe!.nutritionComparison.before)
    return (
        <div className={styles.whyTheseChanges}>
            <div className={styles.sectionTitle}>
                <Heart className={styles.Svg} />
                <span>{translation.nutritionComparison}</span>
            </div>


            <motion.div className={styles.comparisonContainer} initial={blurIn.initial} animate={blurIn.animate} transition={blurIn.transition}>
                <div className={styles.BeforcomparisonColumn}>
                    <div className={`${styles.before}`}>
                        {translation.before}
                    </div>

                    <div className={styles.BeforenutritionValues}>
                        {nutritionComparisonBeforeValues.map((value, index) => (
                            <div key={index} className={styles.BeforenutritionValue}>
                                <div className={styles.closeBefore}>
                                    <X />
                                </div>
                                <div>
                                    <span>{nutritionComparisonKeys[index]}:</span><span> {value}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={styles.arrow}>
                    <ArrowRightLeft className={styles.arrowright} />
                    <ArrowDownUp className={styles.ArrowDownUp} />
                </div>
                <div className={styles.AftercomparisonColumn}>
                    <div className={`${styles.after}`}>
                        {translation.after}
                    </div>
                    <div className={styles.AfternutritionValues}>
                        {nutritionComparisonAfterValues.map((value, index) => (
                            <div key={index} className={styles.AfternutritionValue}>
                                <span className={styles.afterright}>
                                    <CheckCheck />
                                </span>
                                <div>
                                    <span>{nutritionComparisonKeys[index]}:</span>
                                    <span>{value}</span>
                                </div>
                            </div>

                        ))}
                    </div>
                </div>
            </motion.div>
            <motion.div className={styles.whyTheseChangesContainer} initial={slideLeftFade.initial} animate={slideLeftFade.animate} transition={slideLeftFade.transition}>
                <div className={styles.sectionTitleForwhyTheseChanges}>
                    <div>
                        {translation.whyTheseChanges}
                    </div>
                    <div>
                        <BiQuestionMark className={styles.questionvg} />
                    </div>
                </div>
                <div className={styles.substitutionsContainer}>
                    {recipe?.substitutions.map((substitution, index) => (
                        <div key={index} className={styles.substitutionCard}>
                            <div className={styles.WhyTheseChangesIcon}><RotateCcw className={styles.substitutionIcon} /></div>
                            <div>
                                <div className={styles.substitutionChange}>
                                    <div className={`${styles.substitutionItem} ${styles.from}`}>
                                        {substitution.from}
                                    </div>
                                    <MoveRight className={styles.arrowrightForsubstitution} />
                                    <div className={`${styles.substitutionItem} ${styles.to}`}>
                                        {substitution.to}
                                    </div>
                                </div>
                                <div className={styles.substitutionReason}>
                                    {substitution.why}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div >
    )
}