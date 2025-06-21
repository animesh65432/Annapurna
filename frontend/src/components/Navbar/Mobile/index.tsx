import { MenuIcon, X } from "lucide-react"
import { useState } from "react"
import { MobileNavbarItems, slideLeftFade } from "../../../utils"
import styles from "./MobileMenu.module.scss"
import { motion } from "framer-motion"


export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

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
                        {MobileNavbarItems.map((item, index) => (
                            <div className={styles.menuItem} key={index}>
                                <div className={styles.iconWrapper}><item.icon /></div>
                                <div className={styles.name}>{item.name}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            )
            }
        </>
    )
}
