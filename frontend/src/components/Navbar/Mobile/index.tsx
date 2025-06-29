import { MenuIcon, X } from "lucide-react"
import { useState } from "react"
import { slideLeftFade } from "../../../utils"
import styles from "./MobileMenu.module.scss"
import { motion } from "framer-motion"
import { useAuthstroe } from "../../../store/useauth"
import { LogOut, LayoutDashboard, BookMarked } from "lucide-react"
import { useNavigate } from "react-router-dom"


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const navigate = useNavigate()
    const { token, removetoken } = useAuthstroe()

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
                        <div className={styles.menuItem} onClick={() => navigate("/dashboard")}>
                            <div className={styles.iconWrapper}><LayoutDashboard /></div>
                            <div className={styles.name}>Dashboard</div>
                        </div>
                        {token &&
                            <div className={styles.menuItem} onClick={() => navigate("/save")}>
                                <div className={styles.iconWrapper}><BookMarked /></div>
                                <div className={styles.name}>Saves</div>
                            </div>
                        }
                        {token &&
                            <div className={styles.menuItem} onClick={removetoken}>
                                <div className={styles.iconWrapper}><LogOut /></div>
                                <div className={styles.name}>Logout</div>
                            </div>
                        }
                    </div>
                </motion.div>
            )
            }
        </>
    )
}
