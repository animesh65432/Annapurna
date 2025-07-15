import React, { useEffect, useState } from 'react'
import styles from "./UpdateSerchInputBox.module.scss"
import { placeholders } from "../../../utils"
import { Sprout, Soup, Paperclip, ArrowRight } from "lucide-react"
import { NutritionBoost, Nutrients, Dish } from "./Suggestion"
import { IoMdNutrition } from "react-icons/io";

const UpdateSerchInputBox: React.FC = () => {
    const [placeholderIndex, setPlaceholderIndex] = useState(0)
    const [SuggestionsActive, setSuggestionsActive] = useState({
        NutritionBoost: false,
        Nutrients: false,
        DietType: false
    })
    const [dish, setdish] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
        }, 2000)
        if (dish.length > 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [dish])
    return (
        <div className={styles.Container}>
            <div className={styles.textlabel}>Amp your recipes with healthy twists</div>
            <div className={styles.SerchinputboxWithSuggestions}>
                <div >
                    {SuggestionsActive.NutritionBoost && <NutritionBoost setSuggestionsActive={setSuggestionsActive} />}
                    {SuggestionsActive.Nutrients && <Nutrients setSuggestionsActive={setSuggestionsActive} />}
                    {SuggestionsActive.DietType && <Dish setSuggestionsActive={setSuggestionsActive} />}
                </div>
                <div className={styles.Serchinputbox}>
                    <input className={styles.inputbox} placeholder={placeholders[placeholderIndex]} />
                    <div className={styles.SerchinputboxOptions}>
                        <div className={styles.SerchinputboxOptionFirst}>
                            <div className={styles.option} onClick={() => setSuggestionsActive(() => ({ NutritionBoost: true, Nutrients: false, DietType: false }))}>
                                <Sprout />
                                <span className={styles.optiontext}>Choose NutritionBoost</span>
                            </div>
                            <div className={styles.option} onClick={() => setSuggestionsActive(() => ({ Nutrients: true, NutritionBoost: false, DietType: false }))}>
                                <IoMdNutrition />
                                <span className={styles.optiontext}>Choose Nutrients</span>
                            </div>
                            <div className={styles.option} onClick={() => setSuggestionsActive(() => ({ DietType: true, Nutrients: false, NutritionBoost: false }))}>
                                <Soup />
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
                </div>
                <div className={styles.suggestionsForDesktop}>
                </div>
            </div>
        </div >
    )
}

export default UpdateSerchInputBox