import { useState } from "react"
import { useRecipeStore } from "../../../store/Recipe"
import styles from "./Header.module.scss"
export default function Header() {
    const [isauth, setauth] = useState<boolean>(false)
    const [isShareOpen, setisShareOPen] = useState<boolean>(false)
    const { recipe } = useRecipeStore()

    const OntoogleShareSection = () => {
        setisShareOPen(true)
    }
    return (
        <div>
            <div className={styles.Headingtitle}>Annapurna Ai</div>
        </div>

    )
}
