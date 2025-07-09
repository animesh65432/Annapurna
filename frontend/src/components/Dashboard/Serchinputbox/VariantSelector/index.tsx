import type { UseFormSetValue } from "react-hook-form"
import type { RecipeFromTypes } from "../index"
import { optionsforFoods } from "../../../../utils"
import styles from "../Serchinputbox.module.scss"

type Props = {
    variant: string
    setValue: UseFormSetValue<RecipeFromTypes>
    suggestions: string[],
}


export default function VariantSelector({ variant, setValue, suggestions }: Props) {
    return (
        <div className={`${styles.optionforvariants}  ${suggestions.length === 5 ? styles.VariantSelectoractive : null}`}>
            {optionsforFoods.map((option) => (
                <div key={option.value} className={styles.optionforvariant} onClick={() => setValue("variant", option.value)}>
                    <div className={`${styles.optionforvariantbox} ${variant === option.value ? styles.activevariant : ""}`}></div>
                    <div>{option.label}</div>
                </div>
            ))}
        </div>
    )
}
