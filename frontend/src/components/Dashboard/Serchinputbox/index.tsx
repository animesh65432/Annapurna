import styles from "./Serchinputbox.module.scss"
import { Search } from "lucide-react"
import Select from "../../Select"
import { optionsforFoods, optionsforLanguages } from "../../../utils"
import { useState } from "react"

export default function Serchinputbox() {
    const [text, settext] = useState<string>("")
    return (
        <div className={styles.Container}>
            <div className={styles.UperContainer}>
                <div className={styles.SearchContainer}>
                    <input className={styles.inputbox} value={text} onChange={(e) => settext(e.target.value)}></input>
                    <Search />
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
