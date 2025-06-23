import styles from "./Serchinputbox.module.scss"
import { Search } from "lucide-react"
import Select from "../../Select"
import { optionsforFoods, optionsforLanguages } from "../../../utils"
import { useEffect, useState } from "react"
import { debounce } from "../../../utils/usedebounce"
import { Getsuggestions } from "../../../api/ai"
import Suggestions from "./Suggestions"

type Props = {
    txt: string | null
}

export default function Serchinputbox({ txt }: Props) {
    const [text, settext] = useState<string>("")
    const [suggestions, setsuggestions] = useState<string[]>([])
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
            settext(e.target.value)
            setsuggestions([])
            return
        }
        else {
            settext(e.target.value)
            debouncedSearch(e.target.value)
        }
    };

    const OnChangesuggestion = (suggestion: string) => {
        settext(suggestion)
        setsuggestions([])
    }

    const selectfromPopularIndianDishes = () => {
        if (!txt) {
            return
        }
        else {
            settext(txt)
        }
    }
    useEffect(() => {
        selectfromPopularIndianDishes()
    }, [txt])

    return (
        <div className={styles.Container}>
            <div className={styles.UperContainer}>
                <div className={styles.SearchContainer}>
                    <input className={styles.inputbox} value={text} onChange={handleChange}></input>
                    <Search className={styles.SearchIcon} />
                    {
                        text.length > 0 ? <Suggestions suggestions={suggestions} OnChangesuggestion={OnChangesuggestion} /> : null
                    }
                </div>
                <div>
                    <button>Transform Recipe</button>
                </div>

            </div>
            <div className={styles.downContainer}>
                <div className={styles.SelectContainer}>
                    <Select options={optionsforFoods} name="Variant" />
                </div>
                <div className={styles.SelectContainer}>
                    <Select options={optionsforLanguages} name="English" />
                </div>
            </div>
            <button className={styles.lstbutton}>Transform Recipe</button>
        </div>
    )
}
