import { useRecipeStore } from "../../../store/Recipe"
import { nutritionTranslations } from "../../../utils"
import styles from "./WhyTheseChagnes.module.scss"

export default function WhyTheseChanges() {
    const { recipe } = useRecipeStore()
    const translation = nutritionTranslations[recipe!.language]

    const nutritionComparisonKeys = Object.keys(recipe!.nutritionComparison.after)
    const nutritionComparisonAfterValues = Object.values(recipe!.nutritionComparison.after)
    const nutritionComparisonBeforeValues = Object.values(recipe!.nutritionComparison.before)

    return (
        <div className={styles.whyTheseChanges}>
            <div className={styles.nutritionSection}>
                <div className={styles.sectionTitle}>
                    {translation.nutritionComparison}
                </div>
                <div className={styles.comparisonContainer}>
                    <div className={styles.comparisonColumn}>
                        <div className={`${styles.columnTitle} ${styles.before}`}>
                            {translation.before}
                        </div>
                        <div className={styles.nutritionValues}>
                            {nutritionComparisonBeforeValues.map((value, index) => (
                                <div key={index} className={styles.nutritionValue}>
                                    {nutritionComparisonKeys[index]}: {value}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={styles.comparisonColumn}>
                        <div className={`${styles.columnTitle} ${styles.after}`}>
                            {translation.after}
                        </div>
                        <div className={styles.nutritionValues}>
                            {nutritionComparisonAfterValues.map((value, index) => (
                                <div key={index} className={styles.nutritionValue}>
                                    {nutritionComparisonKeys[index]}: {value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.substitutionsSection}>
                <div className={styles.sectionTitle}>
                    {translation.substitutions}
                </div>
                <div className={styles.substitutionsContainer}>
                    {recipe?.substitutions.map((substitution, index) => (
                        <div key={index} className={styles.substitutionCard}>
                            <div className={styles.substitutionChange}>
                                <div className={`${styles.substitutionItem} ${styles.from}`}>
                                    {substitution.from}
                                </div>
                                <div className={styles.arrow}>→</div>
                                <div className={`${styles.substitutionItem} ${styles.to}`}>
                                    {substitution.to}
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
            </div>
        </div>
    )
}