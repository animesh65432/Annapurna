import styles from "./Serchinputbox.module.scss"
import { Search } from "lucide-react"
import Select from "../../Select"
import { optionsforFoods, optionsforLanguages } from "../../../utils"
import { useState } from "react"
import { debounce } from "../../../utils/usedebounce"
import { Getsuggestions } from "../../../api/ai"

export default function Serchinputbox() {
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
    }, 1000);

    return (
        <div className={styles.Container}>
            <div className={styles.UperContainer}>
                <div className={styles.SearchContainer}>
                    <input className={styles.inputbox} value={text} onChange={(e) => {
                        settext(e.target.value);
                        debouncedSearch(e.target.value);
                    }}></input>
                    <Search />
                </div>
                <div>
                    <button>Transform Recipe</button>
                </div>
                {
                    suggestions.length > 0 && <div>
                        {suggestions.map((suggestion) => <div key={suggestion}>{suggestion}</div>)}
                    </div>
                }
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
