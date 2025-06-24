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

type RecipeTypes = z.infer<typeof RecipeFromSchema>;

type Props = {
    txt: string | null
}

export default function Serchinputbox({ txt }: Props) {
    const [suggestions, setsuggestions] = useState<string[]>([])
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
    }, 300);

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
            setValue("dish", txt);
            setsuggestions([])
        }
    }
    useEffect(() => {
        selectfromPopularIndianDishes()
    }, [txt])

    const onSubmit = (data: RecipeTypes) => {
        console.log("Submitting payload:", data);
    };
    return (
        <form className={styles.Container} onSubmit={handleSubmit(onSubmit)}>
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
                    <button type="submit">Transform Recipe</button>
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
            <button className={styles.lstbutton} type="submit">Transform Recipe</button>
        </form>
    )
}