import React from 'react'
import styles from "./Layout.module.scss"
import Navbar from '../Navbar'
import MobileMenu from '../Navbar/Mobile'
type Props = {
    children: React.ReactNode
}
const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.LayoutContainer}>
            <div className={styles.NavContainer}>
                <Navbar />
            </div>
            <div className={styles.MobileNavContainer}>
                <MobileMenu />
            </div>
            <div className={styles.MainContainer}>
                {children}
            </div>
        </div>
    )
}

export default Layout