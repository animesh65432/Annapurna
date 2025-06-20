import styles from "./Serchinputbox.module.scss"
import { Search } from "lucide-react"
import Select from "../../Select"
import { optionsforFoods, optionsforLanguages } from "../../../utils"

export default function Serchinputbox() {
    return (
        <div className={styles.Container}>
            <div className={styles.UperContainer}>
                <div className={styles.SearchContainer}>
                    <input className={styles.inputbox}></input>
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
        </div>
    )
}
