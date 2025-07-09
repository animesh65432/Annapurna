import { useState } from "react"
import styles from "./Header.module.scss"
import shareIcon from "../../../assets/share.svg"
import downloadIcon from "../../../assets/download.svg"
import MobileMenu from "../../Navbar/Mobile"
import ShareSection from "../../ShareSection"
import { useRecipeStore } from "../../../store/Recipe"
export default function Header() {
    const [isShareOpen, setisShareOPen] = useState<boolean>(false)
    const { recipe } = useRecipeStore()
    const OntoogleShareSection = () => {
        setisShareOPen(true)
    }
    return (
        <>
            <div className={styles.HeaderContainer}>
                <div className={styles.Headingtitle}>
                    <MobileMenu />
                    <span>Annapurna Ai</span>
                </div>
                <div className={styles.HeaderIcons}>
                    <div className={styles.HeaderIcon} onClick={OntoogleShareSection}>
                        <img src={shareIcon} />
                    </div>
                    <div className={styles.HeaderIcon}>
                        <img src={downloadIcon} />
                    </div>
                </div>
            </div>
            {
                isShareOpen && <ShareSection dishname={recipe?.dish!} setisShareOPen={setisShareOPen} />
            }
        </>
    )
}
