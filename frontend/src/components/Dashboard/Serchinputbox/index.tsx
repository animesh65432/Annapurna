import styles from "./Serchinputbox.module.scss"
import { Search } from "lucide-react"
import Select from "../../Select"
import { optionsforFoods, optionsforLanguages } from "../../../utils"
import { useEffect, useState } from "react"
import { debounce } from "../../../utils/usedebounce"
import { Getsuggestions } from "../../../api/ai"
import Suggestions from "./Suggestions"
import { RecipeFromSchema } from "../../../schema/RecipeFrom"
import { useForm, Controller } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom"
import { useRecipeStore } from "../../../store/Recipe"

type RecipeTypes = z.infer<typeof RecipeFromSchema>;

type Props = {
    txt: string | null,
    createRecipe: (dish: string, variant: string, language: string) => Promise<{ id: string }>
}

export default function Serchinputbox({ txt, createRecipe }: Props) {
    const [suggestions, setsuggestions] = useState<string[]>([])
    const { clearRecipe } = useRecipeStore()
    const navigate = useNavigate()
    const {
        handleSubmit,
        setValue,
        watch,
        control,
        formState: { errors }
    } = useForm<RecipeTypes>({
        resolver: zodResolver(RecipeFromSchema),
        defaultValues: {
            dish: "",
            variant: "",
            language: ""
        }
    });
    const dish = watch("dish");
    const hasErrors = Object.keys(errors).length > 0;

    const debouncedSearch = debounce(async (query: string) => {
        if (query.trim() === "") {
            return;
        }
        try {
            const response = await Getsuggestions(query) as {
                suggestions: string[];
            }
            console.log("Suggestions:", response.suggestions);
            setsuggestions(response.suggestions)
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    }, 2000);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length === 0) {
            setValue("dish", e.target.value);
            setsuggestions([])
            return
        }
        else {
            setValue("dish", e.target.value);
            debouncedSearch(e.target.value)
        }
    };

    const OnChangesuggestion = (suggestion: string) => {
        setValue("dish", suggestion);
        setsuggestions([])
    }

    const selectfromPopularIndianDishes = () => {
        if (!txt) {
            return
        }
        else {
            setValue("dish", txt, { shouldValidate: true });
            setsuggestions([])
        }
    }
    useEffect(() => {
        selectfromPopularIndianDishes()
    }, [txt])

    useEffect(() => {
        const closeSuggestions = () => setsuggestions([]);
        window.addEventListener("click", closeSuggestions);
        return () => window.removeEventListener("click", closeSuggestions);
    }, []);

    const onSubmit = (data: RecipeTypes) => {
        createRecipe(data.dish, data.variant, data.language)
            .then((response) => {
                const recipeId = response.id;
                clearRecipe();
                return recipeId;
            })
            .then((recipeId) => {
                navigate(`/recipe/${recipeId}`, { replace: true });
            })
            .catch((error) => {
                console.error("Error during recipe submission:", error);
            });
    };

    return (
        <form className={`${styles.Container} ${hasErrors ? styles.hasErrors : ''}`} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.UperContainer}>
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
                                />
                            )}
                        />

                        <Search className={styles.SearchIcon} />
                        {
                            dish.length > 0 ? <Suggestions suggestions={suggestions} OnChangesuggestion={OnChangesuggestion} /> : null
                        }
                    </div>
                    {errors.dish && <p className={styles.error}>{errors.dish.message}</p>}
                </div>
                <div>
                    <button type="submit" >Transform Recipe</button>
                </div>
            </div>
            <div className={styles.downContainer}>
                <div className={styles.SelectContainer}>
                    <Controller
                        name="variant"
                        control={control}
                        render={({ field }) => (
                            <Select
                                options={optionsforFoods}
                                name="Variant"
                                value={field.value}
                                onChange={(val) => field.onChange(val)}
                            />
                        )}
                    />
                    {errors.variant && <p className={styles.error}>{errors.variant.message}</p>}
                </div>
                <div className={styles.SelectContainer}>
                    <Controller
                        name="language"
                        control={control}
                        render={({ field }) => (
                            <Select
                                options={optionsforLanguages}
                                name="Language"
                                value={field.value}
                                onChange={(val) => field.onChange(val)}
                            />
                        )}
                    />
                    {errors.language && <p className={styles.error}>{errors.language.message}</p>}
                </div>
            </div>
            <button className={styles.lstbutton} type="submit" >Transform Recipe</button>
        </form>
    )
}