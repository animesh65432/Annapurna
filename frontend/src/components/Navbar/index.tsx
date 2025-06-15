import React from 'react'
import styles from "./Navbar.module.scss"
import { Settings } from "lucide-react"

const Navbar: React.FC = () => {
    return (
        <div className={styles.Container}>
            <div>
                <div className={styles.LogoContainer}>
                    <img src='/Annapurna.jpg' />
                </div>
            </div>
            <div>
                <Settings className={styles.SettingsIcon} />
            </div>
        </div>
    )
}

export default Navbar