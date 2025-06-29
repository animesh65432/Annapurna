import type { SavesRecipesTypes } from "../../../types"
import styles from "./Save.module.scss"
import { useNavigate } from "react-router-dom"

type Props = {
    SavesRecipe: SavesRecipesTypes
}

export default function Save({ SavesRecipe }: Props) {
    const navigate = useNavigate()
    return (
        <div className={styles.Container} onClick={() => navigate(`/recipe/${SavesRecipe.recipe.id}`)}>
            <div className={styles.dishName}>
                {SavesRecipe.recipe.dish}
            </div>
            <div className={styles.dishDescription}>{SavesRecipe.recipe.healthierVersion.description}</div>
        </div>
    )
}
