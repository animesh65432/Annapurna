import { useState } from "react"
import { useRecipeStore } from "../../../store/Recipe"
import styles from "./Header.module.scss"
import shareIcon from "../../../assets/share.svg"
import downloadIcon from "../../../assets/download.svg"
export default function Header() {
    const [isauth, setauth] = useState<boolean>(false)
    const [isShareOpen, setisShareOPen] = useState<boolean>(false)
    const { recipe } = useRecipeStore()

    const OntoogleShareSection = () => {
        setisShareOPen(true)
    }
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.Headingtitle}>Annapurna Ai</div>
            <div className={styles.HeaderIcons}>
                <div className={styles.HeaderIcon}>
                    <img src={shareIcon} />
                </div>
                <div className={styles.HeaderIcon}>
                    <img src={downloadIcon} />
                </div>
            </div>
        </div>

    )
}
