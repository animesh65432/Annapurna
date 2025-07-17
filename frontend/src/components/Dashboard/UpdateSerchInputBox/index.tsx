import React, { useEffect, useState } from 'react'
import styles from "./UpdateSerchInputBox.module.scss"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { UpdateRecipeFrom } from "../../../schema/UpdateRecipeFrom"
import { placeholders } from "../../../utils"
import { Sprout, Soup, ArrowRight, Carrot } from "lucide-react"
import { NutritionBoost, Nutrients, Dish } from "./Suggestion"
import { zodResolver } from '@hookform/resolvers/zod'
import Suggestions from "../Serchinputbox/Suggestions"
import { Getsuggestions } from '../../../api/ai'
import { debounce } from '../../../utils/usedebounce'
import type { RecipeTypes } from '../../../types'
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from 'framer-motion'

export type RecipeFromTypes = z.infer<typeof UpdateRecipeFrom>

type Props = {
    language: { label: string, value: string },
    createRecipe: (Nutrient: string, dish: string, variant: string, language: string, DishType: string) => Promise<{ id: string, recipe: RecipeTypes } | null>,
    setisGenrateRecipeloading: React.Dispatch<boolean>
}
const sentence = "Amp your recipes with healthy twists";

const UpdateSerchInputBox: React.FC<Props> = ({ language, createRecipe, setisGenrateRecipeloading }) => {
    const location = useLocation();
    const recipestate = location.state
    const [suggestions, setsuggestions] = useState<string[]>([])
    const [placeholderIndex, setPlaceholderIndex] = useState(0)
    const words = sentence.split(" ");
    const [SuggestionsActive, setSuggestionsActive] = useState({
        NutritionBoost: false,
        Nutrients: false,
        DietType: false,

    })
    const { handleSubmit, setValue, watch, control } = useForm<RecipeFromTypes>({
        resolver: zodResolver(UpdateRecipeFrom),
        defaultValues: {
            variant: "",
            dish: "",
            Nutrient: "",
            DishType: "",
            language: language.value
        }
    })
    const navigate = useNavigate()
    const dish = watch("dish")
    const variant = watch("variant")
    const nutrient = watch("Nutrient")
    const dishtype = watch("DishType")


    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
        }, 2000)
        if (dish.length > 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [dish])

    const GenerateSuggestionByKey = debounce(async (dish: string) => {
        const response = await Getsuggestions(dish) as { suggestions: string[] }
        setsuggestions(response.suggestions)
    }, 300)

    useEffect(() => {
        if (dish.length === 0) {
            return
        }
        else {
            GenerateSuggestionByKey(dish)
        }
    }, [dish])

    useEffect(() => {
        if (recipestate) {
            setValue("dish", recipestate)
        }
    }, [recipestate])

    const selectfromsuggestions = (suggestion: string) => {
        console.log("Selected suggestion:", suggestion);
        setValue("dish", suggestion, { shouldValidate: true });
        setsuggestions([]);
    }

    const OnSubmit = async (data: RecipeFromTypes) => {
        try {

            if (dish.length === 0) {
                return
            }
            else {
                const response = await createRecipe(data.Nutrient, data.dish, data.variant, data.language, data.DishType)
                if (response) {
                    navigate(`/recipe/${response.id}`, { replace: true, state: response.recipe });
                    setisGenrateRecipeloading(false);
                }
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className={styles.Container}>
            <div className={styles.textlabel}>
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.2,
                        }}
                        style={{ display: "inline-block", marginRight: "6px" }}
                    >
                        {word}
                    </motion.span>
                ))}
            </div>
            <div className={styles.SerchinputboxWithSuggestions}>
                <div className={styles.suggestionsForMobile}>
                    {suggestions.length > 0 &&
                        <Suggestions setsuggestions={setsuggestions} suggestions={suggestions} selectfromsuggestions={selectfromsuggestions} />
                    }
                </div>

                <form className={styles.Serchinputbox} onSubmit={handleSubmit(OnSubmit)}>
                    <Controller name='dish' control={control} render={({ field }) => {
                        return <input className={styles.inputbox} {...field} onChange={(e) => field.onChange(e)} placeholder={placeholders[placeholderIndex]} value={dish} />
                    }} />
                    <div className={styles.SerchinputboxOptions}>
                        <div className={styles.SerchinputboxOptionFirst}>
                            <div className={`${styles.option} ${variant.length > 0 ? styles.active : null}`} onClick={() => setSuggestionsActive(() => ({ NutritionBoost: true, Nutrients: false, DietType: false }))}>

                                {SuggestionsActive.NutritionBoost && <NutritionBoost setValue={setValue} setSuggestionsActive={setSuggestionsActive} />}
                                <Sprout />
                                <span>{variant}</span>
                                <span className={styles.optiontext}>Choose NutritionBoost</span>
                            </div>
                            <div className={`${styles.option}  ${Nutrients.length > 0 ? styles.active : null}`} onClick={() => setSuggestionsActive(() => ({ Nutrients: true, NutritionBoost: false, DietType: false }))}>
                                {SuggestionsActive.Nutrients && <Nutrients setValue={setValue} setSuggestionsActive={setSuggestionsActive} />}
                                <Carrot />
                                <span>{nutrient}</span>
                                <span className={styles.optiontext}>Choose Nutrients</span>
                            </div>
                            <div className={`${styles.option} ${dishtype.length > 0 ? styles.active : null}`} onClick={() => setSuggestionsActive(() => ({ DietType: true, Nutrients: false, NutritionBoost: false }))}>
                                {SuggestionsActive.DietType && <Dish setValue={setValue} setSuggestionsActive={setSuggestionsActive} />}
                                <Soup />
                                <span>{dishtype}</span>
                                <span className={styles.optiontext}>Choose Diet Type</span>
                            </div>
                        </div>
                        <div className={styles.SerchinputboxOptionSecond}>
                            {/* <label htmlFor="ingredientUpload" className={styles.optionfile}>
                                <Paperclip />
                                <span className={styles.optionfiletext}>Upload Ingredient</span>
                                <input
                                    type="file"
                                    id="ingredientUpload"
                                    accept="image/*"
                                    capture="environment"
                                    style={{ display: "none" }}
                                    onChange={handleImageUpload}
                                />
                            </label> */}

                            <button className={`${styles.arrowroud} ${dish.length > 0 ? styles.arrowactive : ""}`} type="submit">
                                <ArrowRight className={`${styles.arrow} }`} />
                            </button>
                        </div>
                    </div>
                </form>
                <div className={styles.suggestionsForDesktop}>
                    {suggestions.length > 0 &&
                        <Suggestions setsuggestions={setsuggestions} suggestions={suggestions} selectfromsuggestions={selectfromsuggestions} />
                    }
                </div>
            </div>
        </div >
    )
}

export default UpdateSerchInputBox