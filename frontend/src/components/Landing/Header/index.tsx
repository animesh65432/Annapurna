import React from 'react'
import styles from "./Header.module.scss"
import { ArrowRight } from "lucide-react"

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>ANNAPURNA AI</div>
            <div className={styles.getstarted}>
                GET STARTED
                <ArrowRight />
            </div>
        </div>
    )
}

export default Header