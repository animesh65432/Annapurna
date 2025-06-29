import type { SavesRecipesTypes } from "../../../types"
import styles from "./Save.module.scss"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { slideLeftFade } from "../../../utils"

type Props = {
    SavesRecipe: SavesRecipesTypes
}

export default function Save({ SavesRecipe }: Props) {
    const navigate = useNavigate()
    return (
        <motion.div initial={slideLeftFade.initial} animate={slideLeftFade.animate} transition={slideLeftFade.transition} className={styles.Container} onClick={() => navigate(`/recipe/${SavesRecipe.recipe.id}`)}>
            <div className={styles.dishName}>
                {SavesRecipe.recipe.dish}
            </div>
            <div className={styles.dishDescription}>{SavesRecipe.recipe.healthierVersion.description}</div>
        </motion.div>
    )
}
