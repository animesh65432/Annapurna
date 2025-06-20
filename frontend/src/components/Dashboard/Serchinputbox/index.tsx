import styles from "./Serchinputbox.module.scss"
import { Search } from "lucide-react"

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
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
