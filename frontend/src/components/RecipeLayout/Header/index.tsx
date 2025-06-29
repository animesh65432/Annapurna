import { useState } from "react"
import { useRecipeStore } from "../../../store/Recipe"
import styles from "./Header.module.scss"
import { Save } from "lucide-react"
import { FaShare } from "react-icons/fa";
import { useAuthstroe } from "../../../store/useauth"
import SigninwithGoogle from "../../SigninwithGoogle"
import ShareSection from "../../ShareSection"
import { useSaverecipe } from "../../../hooks/useSaverecipe"
import { Loader } from "lucide-react"


export default function Header() {
    const [isauth, setauth] = useState<boolean>(false)
    const [isShareOpen, setisShareOPen] = useState<boolean>(false)
    const { token } = useAuthstroe()
    const { isloadingSaverecipe, saverecipe } = useSaverecipe()
    const { recipe } = useRecipeStore()

    const onsave = async () => {
        if (!token) {
            setauth(true)
            return
        }
        else {
            saverecipe(recipe?.id!)
        }
    }

    const OntoogleShareSection = () => {
        setisShareOPen(true)
    }
    return (
        <>
            <div className={styles.Container}>
                <div className={styles.NameWithIcons}>
                    <div className={styles.dishNameandDes}>
                        <div className={styles.dishName}>{recipe?.dish}</div>
                    </div>
                    <div className={styles.Icons}>
                        <div><FaShare onClick={OntoogleShareSection} /></div>
                        <div>{isloadingSaverecipe ? <Loader className={styles.loader} /> : <Save onClick={onsave} />}</div>
                    </div>
                </div>
                <div className={styles.MobileNameWithIcons}>
                    <div className={styles.MobileIcons}>
                        <div><FaShare onClick={OntoogleShareSection} /></div>
                        <div>{isloadingSaverecipe ? <Loader className={styles.loader} /> : <Save onClick={onsave} />}</div>
                    </div>
                    <div className={styles.MobiledishNameWithDes}>
                        <div className={styles.MobiledishName}>
                            {recipe?.dish}
                        </div>
                    </div>
                </div>
            </div>
            {isauth && <SigninwithGoogle setauth={setauth} />}
            {isShareOpen && <ShareSection dishname={recipe?.dish!} setisShareOPen={setisShareOPen} />}
        </>

    )
}
