import { useState } from "react"
import { useRecipeStore } from "../../../store/Recipe"
import styles from "./Header.module.scss"
import { Share, Save } from "lucide-react"
import { useAuthstroe } from "../../../store/useauth"
import SigninwithGoogle from "../../SigninwithGoogle"


export default function Header() {
    const [isauth, setauth] = useState<boolean>(false)
    const { token } = useAuthstroe()
    const { recipe } = useRecipeStore()

    const onsave = () => {
        if (!token) {
            setauth(true)
        }
    }
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.NameWithIcons}>
                    <div className={styles.dishNameandDes}>
                        <div className={styles.dishName}>{recipe?.dish}</div>
                    </div>
                    <div className={styles.Icons}>
                        <div><Share /></div>
                        <div><Save onClick={onsave} /></div>
                    </div>
                </div>
                <div className={styles.MobileNameWithIcons}>
                    <div className={styles.MobileIcons}>
                        <div><Share /></div>
                        <div><Save onClick={onsave} /></div>
                    </div>
                    <div className={styles.MobiledishNameWithDes}>
                        <div className={styles.MobiledishName}>
                            {recipe?.dish}
                        </div>
                    </div>
                </div>
            </div>
            {isauth && <SigninwithGoogle setauth={setauth} />}
        </>

    )
}
