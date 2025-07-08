import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
import styles from "./WhyTheseChagnes.module.scss"
import { Heart, RotateCcw, MoveRight } from 'lucide-react';
import { BiQuestionMark } from "react-icons/bi";
import { X, CheckCheck, ArrowRightLeft } from "lucide-react"

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


            <div className={styles.comparisonContainer}>
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
            </div>
            <div className={styles.whyTheseChangesContainer}>
                <div className={styles.sectionTitleForwhyTheseChanges}>
                    <div>
                        {translation.whyTheseChanges}
                    </div>
                    <div>
                        <BiQuestionMark className={styles.Svg} />
                    </div>
                </div>
                <div className={styles.substitutionsContainer}>
                    {recipe?.substitutions.map((substitution, index) => (
                        <div key={index} className={styles.substitutionCard}>
                            <div className={styles.WhyTheseChangesIcon}><RotateCcw /></div>
                            <div>
                                <div className={styles.substitutionChange}>
                                    <div className={`${styles.substitutionItem} ${styles.from}`}>
                                        {substitution.from}
                                    </div>
                                    <MoveRight className={styles.arrowright} />
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
            </div>
        </div >
    )
}