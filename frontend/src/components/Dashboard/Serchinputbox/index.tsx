import styles from "./Serchinputbox.module.scss"
import Select from "../../Select"
import { optionsforLanguages, optionsforFoods, placeholders } from "../../../utils"
import React, { useEffect, useState } from "react"
import { RecipeFromSchema } from "../../../schema/RecipeFrom"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { ArrowUp } from "lucide-react"
import type { RecipeTypes } from "../../../types"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom"


type RecipeFromTypes = z.infer<typeof RecipeFromSchema>;

type Props = {
    txt: string | null,
    createRecipe: (dish: string, variant: string, language: string) => Promise<{ id: string }>,
    setisGenrateRecipeloading: React.Dispatch<React.SetStateAction<boolean>>

}

export default function Serchinputbox({ txt, createRecipe, setisGenrateRecipeloading }: Props) {
    const navigate = useNavigate()
    const [placeholderIndex, setPlaceholderIndex] = useState(0);
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
            variant: "",
            language: "english",
            Cabs: "Low",
            Calories: "Low"
        }
    });
    const dish = watch("dish");
    const carbs = watch("Cabs")
    const calories = watch("Calories")
    const variant = watch("variant")
    const hasErrors = Object.keys(errors).length > 0;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setValue("dish", e.target.value);
            return
        }
        else {
            setValue("dish", e.target.value)
        }
    };

    const selectfromPopularIndianDishes = () => {
        if (!txt) {
            return
        }
        else {
            setValue("dish", txt, { shouldValidate: true });
        }
    }
    useEffect(() => {
        selectfromPopularIndianDishes()
    }, [txt])


    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const onSubmit = async (data: RecipeFromTypes) => {
        try {
            console.log(data)
            // const response = await createRecipe(data.dish, data.variant, data.language) as { id: string, recipe: RecipeTypes }
            // const recipeId = response.id;
            // if (recipeId) {
            //     setisGenrateRecipeloading(false)
            //     navigate(`/recipe/${recipeId}`, {
            //         replace: true,
            //         state: {
            //             recipe: response.recipe
            //         }
            //     })
            // }
        } catch (error) {
            console.log(error)
        }

    };
    return (
        <form className={`${styles.Container} ${hasErrors ? styles.hasErrors : ''}`} onSubmit={handleSubmit(onSubmit)}>

            <div className={styles.upperContainer}>
                <div className={styles.Headingtitle}>
                    Annapurna Ai
                </div>
                <div className={styles.SelectContainer}>
                    <Controller
                        name="language"
                        control={control}
                        render={({ field }) => (
                            <Select
                                options={optionsforLanguages}
                                name="Language"
                                InitialValue={optionsforLanguages[optionsforLanguages.length - 1]}
                                value={field.value}
                                onChange={(val) => field.onChange(val)}
                            />
                        )}
                    />
                </div>
            </div>
            <div className={styles.downContainer}>
                <div className={styles.textlabel}>Amp your recipes with healthy twists</div>
                <div className={styles.SearchContainerwithOptionsContainer}>
                    <div className={styles.SearchContainerWithError}>
                        <div className={styles.SearchContainer}>
                            <Controller
                                name="dish"
                                control={control}
                                render={({ field }) => (
                                    <input
                                        className={styles.inputbox}
                                        {...field}
                                        onChange={(e) => {
                                            field.onChange(e);
                                            handleChange(e);
                                        }}
                                        placeholder={placeholders[placeholderIndex]}
                                        value={dish}
                                    />
                                )}
                            />
                            <div className={`${styles.arrowroud} ${dish.length > 0 ? `${styles.arrowroudactive}` : ""}`}>
                                <ArrowUp className={styles.arrow} />
                            </div>
                        </div>
                    </div>
                    <div className={styles.optionforvariants}>
                        {optionsforFoods.map((option) => <div key={option.value} className={styles.optionforvariant} onClick={() => setValue("variant", `${option.value}`)}>
                            <div className={`${styles.optionforvariantbox} ${variant == option.value ? `${styles.activevariant}` : null}`}></div>
                            <div>{option.label}</div>
                        </div>)}
                    </div>
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

                </div>

            </div>
        </form >
    )
}