import styles from "./Serchinputbox.module.scss"
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useNavigate } from "react-router-dom"
import { placeholders } from "../../../utils"
import { RecipeFromSchema } from "../../../schema/RecipeFrom"
import type { z } from "zod"
import LanguageSelect from "./LanguageSelect"
import DishInput from "./DishInput"
import VariantSelector from "./VariantSelector"
import NutritionToggles from "./NutritionToggles"
import { Foodloading } from "../../../components"
import MobileMenu from "../../Navbar/Mobile"
import { useLocation } from "react-router-dom"
import type { RecipeTypes } from "../../../types"
import { Getsuggestions } from "../../../api/ai"
import { debounce } from "../../../utils/usedebounce"
import Suggestions from "./Suggestions"

export type RecipeFromTypes = z.infer<typeof RecipeFromSchema>

type Props = {
    createRecipe: (Calories: string, Cabs: string, dish: string, variant: string, language: string) => Promise<{ id: string, recipe: RecipeTypes } | null>
    setisGenrateRecipeloading: React.Dispatch<React.SetStateAction<boolean>>
    isGenrateRecipeloading: boolean
}

export default function SearchInputBox({ isGenrateRecipeloading, createRecipe, setisGenrateRecipeloading }: Props) {
    const navigate = useNavigate()
    const [suggestions, setsuggestions] = useState<string[]>([])
    const [placeholderIndex, setPlaceholderIndex] = useState(0)
    const {
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors }
    } = useForm<RecipeFromTypes>({
        resolver: zodResolver(RecipeFromSchema),
        defaultValues: {
            dish: "",
            variant: "high_protein",
            language: "english",
            Cabs: "Low",
            Calories: "Low"
        }
    })
    const location = useLocation()
    const dishstate = location.state;
    const dish = watch("dish")
    const carbs = watch("Cabs")
    const calories = watch("Calories")
    const variant = watch("variant")
    const hasErrors = Object.keys(errors).length > 0

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
        }, 2000)
        if (dish.length > 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [dish])

    useEffect(() => {
        if (dishstate) setValue("dish", dishstate, { shouldValidate: true })
    }, [dishstate])

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

    const handleDishChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue("dish", e.target.value)
    }

    const selectfromsuggestions = (dish: string) => {
        setValue("dish", dish)
        setsuggestions([])
    }

    const onSubmit = async (data: RecipeFromTypes) => {
        try {
            const response = await createRecipe(data.Calories, data.Cabs, data.dish, data.variant, data.language);
            if (response) {
                navigate(`/recipe/${response.id}`, { replace: true, state: response.recipe });
                setisGenrateRecipeloading(false);
            }
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <>
            <form className={`${styles.Container} ${hasErrors ? styles.hasErrors : ''}`} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.upperContainer}>
                    <div className={styles.titlewithIcon}>
                        <span className={styles.MenuIcon}>
                            <MobileMenu />
                        </span>
                        <div className={styles.Headingtitle}>Annapurna Ai</div>
                    </div>
                    <div className={styles.SelectContainer}>
                        <LanguageSelect control={control} />
                    </div>
                </div>
                {
                    !isGenrateRecipeloading ? <div className={styles.downContainer}>
                        <div className={styles.textlabel}>Amp your recipes with healthy twists</div>
                        <div className={styles.SearchContainerwithOptionsContainer}>
                            <div className={styles.SearchContainerWithError}>
                                <DishInput control={control} placeholder={placeholders[placeholderIndex]} dish={dish} onDishChange={handleDishChange} />
                                {
                                    suggestions.length === 5 ? <Suggestions setsuggestions={setsuggestions} selectfromsuggestions={selectfromsuggestions} suggestions={suggestions} /> : null
                                }
                            </div>
                            <VariantSelector variant={variant} setValue={setValue} suggestions={suggestions} />
                            <NutritionToggles carbs={carbs} calories={calories} setValue={setValue} suggestions={suggestions} />
                        </div>
                    </div> : <Foodloading />
                }

            </form>
        </>
    )
}
