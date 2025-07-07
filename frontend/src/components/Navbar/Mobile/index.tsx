import { MenuIcon, X } from "lucide-react"
import { useState } from "react"
import { slideLeftFade } from "../../../utils"
import styles from "./MobileMenu.module.scss"
import { motion } from "framer-motion"
import { LayoutDashboard } from "lucide-react"
import { IoEarthOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    return (
        <>
            {!isOpen ? (
                <MenuIcon
                    onClick={() => setIsOpen(true)}
                    className={styles.icon}
                    aria-label="Open menu"
                />
            ) : (
                <motion.div
                    className={styles.Container}
                    initial={slideLeftFade.initial}
                    animate={slideLeftFade.animate}
                    exit={slideLeftFade.exit}
                    transition={slideLeftFade.transition}
                >
                    <X
                        onClick={() => setIsOpen(false)}
                        className={styles.closeIcon}
                        aria-label="Close menu"
                    />
                    <div className={styles.menuItems}>
                        <div className={styles.menuItem} onClick={() => navigate("/")}>
                            <div className={styles.iconWrapper}><LayoutDashboard /></div>
                            <div className={styles.name}>Dashboard</div>
                        </div>
                        <div className={styles.menuItem} onClick={() => navigate("/discover")}>
                            <div className={styles.iconWrapper}><IoEarthOutline /></div>
                            <div className={styles.name}>Discover</div>
                        </div>
                    </div>
                </motion.div>
            )
            }
        </>
    )
}
