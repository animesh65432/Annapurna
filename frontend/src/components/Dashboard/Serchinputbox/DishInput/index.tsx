import { Controller } from "react-hook-form"
import { ArrowRight } from "lucide-react"
import styles from "../Serchinputbox.module.scss"

type Props = {
    control: any
    placeholder: string
    dish: string
    onDishChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DishInput({ control, placeholder, dish, onDishChange }: Props) {
    return (
        <Controller
            name="dish"
            control={control}
            render={({ field }) => (
                <div className={styles.SearchContainer}>
                    <input
                        className={styles.inputbox}
                        {...field}
                        onChange={(e) => {
                            field.onChange(e)
                            onDishChange(e)
                        }}
                        placeholder={placeholder}
                        value={dish}
                    />
                    <button className={`${styles.arrowroud} ${dish.length > 0 ? styles.arrowroudactive : ""}`}>
                        <ArrowRight className={styles.arrow} />
                    </button>
                </div>
            )}
        />
    )
}
