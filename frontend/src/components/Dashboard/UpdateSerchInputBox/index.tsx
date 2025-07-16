import React, { useEffect, useState } from 'react'
import styles from "./UpdateSerchInputBox.module.scss"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { UpdateRecipeFrom } from "../../../schema/UpdateRecipeFrom"
import { placeholders } from "../../../utils"
import { Sprout, Soup, Paperclip, ArrowRight, Carrot } from "lucide-react"
import { NutritionBoost, Nutrients, Dish } from "./Suggestion"
import { zodResolver } from '@hookform/resolvers/zod'

export type RecipeFromTypes = z.infer<typeof UpdateRecipeFrom>
const UpdateSerchInputBox: React.FC = () => {
    const [placeholderIndex, setPlaceholderIndex] = useState(0)
    const { handleSubmit,
        setValue,
        watch, control } = useForm<RecipeFromTypes>({
            resolver: zodResolver(UpdateRecipeFrom),
            defaultValues: {
                variant: "",
                dish: "",
                Nutrients: "",
                DishType: ""

            }
        })
    const [SuggestionsActive, setSuggestionsActive] = useState({
        NutritionBoost: false,
        Nutrients: false,
        DietType: false,

    })
    const dish = watch("dish")
    const variant = watch("variant")
    const nutrient = watch("Nutrients")
    const dishtype = watch("DishType")

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
    //     }, 2000)
    //     if (dish.length > 0) {
    //         clearInterval(interval)
    //     }
    //     return () => clearInterval(interval)
    // }, [dish])

    const OnSubmit = (data: RecipeFromTypes) => { }

    console.log(dish)
    return (
        <div className={styles.Container}>
            <div className={styles.textlabel}>Amp your recipes with healthy twists</div>
            <div className={styles.SerchinputboxWithSuggestions}>
                <div >
                    {SuggestionsActive.NutritionBoost && <NutritionBoost setValue={setValue} setSuggestionsActive={setSuggestionsActive} />}
                    {SuggestionsActive.Nutrients && <Nutrients setValue={setValue} setSuggestionsActive={setSuggestionsActive} />}
                    {SuggestionsActive.DietType && <Dish setValue={setValue} setSuggestionsActive={setSuggestionsActive} />}
                </div>
                <form className={styles.Serchinputbox} onSubmit={handleSubmit(OnSubmit)}>
                    <Controller name='dish' control={control} render={({ field }) => {
                        return <input className={styles.inputbox} {...field} onChange={(e) => field.onChange(e)} placeholder={placeholders[placeholderIndex]} value={dish} />
                    }} />
                    <div className={styles.SerchinputboxOptions}>
                        <div className={styles.SerchinputboxOptionFirst}>
                            <div className={`${styles.option} ${variant.length > 0 ? styles.active : null}`} onClick={() => setSuggestionsActive(() => ({ NutritionBoost: true, Nutrients: false, DietType: false }))}>
                                <Sprout />
                                <span>{variant}</span>
                                <span className={styles.optiontext}>Choose NutritionBoost</span>
                            </div>
                            <div className={`${styles.option}  ${Nutrients.length > 0 ? styles.active : null}`} onClick={() => setSuggestionsActive(() => ({ Nutrients: true, NutritionBoost: false, DietType: false }))}>
                                <Carrot />
                                <span>{nutrient}</span>
                                <span className={styles.optiontext}>Choose Nutrients</span>
                            </div>
                            <div className={`${styles.option} ${dishtype.length > 0 ? styles.active : null}`} onClick={() => setSuggestionsActive(() => ({ DietType: true, Nutrients: false, NutritionBoost: false }))}>
                                <Soup />
                                <span>{dishtype}</span>
                                <span className={styles.optiontext}>Choose Diet Type</span>
                            </div>
                        </div>
                        <div className={styles.SerchinputboxOptionSecond}>
                            <div className={styles.optionfile}>
                                <Paperclip />
                                <span className={styles.optionfiletext}>Upload Ingredient</span>
                            </div>
                            <div>
                                <ArrowRight className={styles.arrowroud} />
                            </div>
                        </div>
                    </div>
                </form>
                <div className={styles.suggestionsForDesktop}>
                </div>
            </div>
        </div >
    )
}

export default UpdateSerchInputBox