import React from 'react'
import styles from "./HerSection.module.scss"
import { motion } from "framer-motion"

const Herosection: React.FC = () => {
    return (
        <div className={styles.Container}>
            <div className={styles.ResponsiveContainer}>
                <div className={styles.Title}>
                    Traditional Taste <br />
                    Smarter Nutrition
                </div>

                <motion.div
                    className={styles.ImgContainer}
                    initial={{ filter: "blur(10px)", opacity: 0 }}
                    animate={{ filter: "blur(0px)", opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <img src='/heroicon.png' alt="Hero Icon" />
                </motion.div>
            </div>

            <motion.div
                className={styles.description}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Transform everyday Indian recipes into healthier meals
                <br /> powered by AI, rooted in Indian wisdom.
            </motion.div>

            <div>
                <button className={styles.GetStatred}>Get Started</button>
            </div>
        </div>
    )
}

export default Herosection
