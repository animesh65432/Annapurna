import React from 'react'
import styles from "./Header.module.scss"

const Header: React.FC = () => {
    return (
        <div className={styles.container}>
            <div>ANNAPURNA AI</div>
            <div className={styles.getstarted}>
                GET STARTED
            </div>
        </div>
    )
}

export default Header