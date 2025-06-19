import React from 'react'
import styles from "./Layout.module.scss"
import { NavbarItems } from "../../utils"
import { LogOut } from "lucide-react"
import { MenuIcon } from "lucide-react"


type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.LayoutContainer}>
            <div className={styles.NavContainer}>
                <div className={styles.upperNavContainer}>
                    {NavbarItems.map((item) =>
                        <div className={styles.navitem}>
                            <div><item.icon className={styles.navitemIcon} /></div>
                            <div>{item.name}</div>
                        </div>)
                    }
                </div>
                <div className={styles.lowerNavContainer}>
                    <div className={styles.navitem}>
                        <div><LogOut className={styles.navitemIcon} /></div>
                        <div>Logout</div>
                    </div>
                </div>
            </div>
            <div className={styles.MobileNavContainer}>
                <MenuIcon />
            </div>
            <div className={styles.MainContainer}>
                {children}
            </div>
        </div>
    )
}

export default Layout