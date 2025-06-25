import { useRecipeStore } from "../../../store/Recipe"
import styles from "./Header.module.scss"
import { Share, Save } from "lucide-react"

export default function Header() {
    const { recipe } = useRecipeStore()
    return (
        <div className={styles.Container}>
            <div className={styles.NameWithIcons}>
                <div className={styles.dishName}>{recipe?.dish}</div>
                <div className={styles.Icons}>
                    <div><Share /></div>
                    <div><Save /></div>
                </div>
            </div>
            <div className={styles.MobileNameWithIcons}>
                <div className={styles.MobileIcons}>
                    <div><Share /></div>
                    <div><Save /></div>
                </div>
                <div className={styles.MobiledishName}>{recipe?.variant}  {recipe?.dish}</div>
            </div>
        </div>
    )
}
