import React from 'react'
import styles from "./Herosection.module.css"
import { motion } from "framer-motion"

const Herosection: React.FC = () => {
    return (
        <motion.div
            className={styles.HerosectionContainer}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className={styles.TitleandimageConainer}>
                <div className={styles.TitleContainer}>
                    <h1>Traditional Taste,<br />Smarter Nutrition</h1>
                </div>

                <div className={styles.indianfood}>
                    <img src='/landing/image.png' alt="Healthy Indian food" />
                </div>
            </div>

            <div className={styles.lastTitle}>
                <p>Transform your everyday Indian recipes into</p>
                <p>healthier versions – powered by AI, backed by</p>
                <p>Indian wisdom.</p>
            </div>
        </motion.div>
    )
}

export default Herosection
