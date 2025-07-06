import type { UseFormSetValue } from "react-hook-form"
import styles from "../Serchinputbox.module.scss"
import type { RecipeFromTypes } from "../index"

type Props = {
    carbs: string
    calories: string
    setValue: UseFormSetValue<RecipeFromTypes>
}

export default function NutritionToggles({ carbs, calories, setValue }: Props) {
    return (
        <div className={styles.CarbsandCalories}>
            <div className={styles.Carbs}>
                <div className={styles.title}>Carbs</div>
                <div onClick={() => setValue("Cabs", "Low")} className={`${styles.low} ${carbs === "Low" ? styles.active : ""}`}>Low</div>
                <div onClick={() => setValue("Cabs", "High")} className={`${styles.high} ${carbs === "High" ? styles.active : ""}`}>High</div>
            </div>
            <div className={styles.Calories}>
                <div className={styles.title}>Calories</div>
                <div onClick={() => setValue("Calories", "Low")} className={`${styles.low} ${calories === "Low" ? styles.active : ""}`}>Low</div>
                <div onClick={() => setValue("Calories", "High")} className={`${styles.high} ${calories === "High" ? styles.active : ""}`}>High</div>
            </div>
        </div>
    )
}
