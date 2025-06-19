import React from 'react'
import styles from "./HerSection.module.scss"
import { motion } from "framer-motion"
import { blurIn, fadeInUp } from "../../../utils"

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
                    initial={blurIn.initial}
                    animate={blurIn.animate}
                    transition={blurIn.transition}
                >
                    <img src='/heroicon.png' alt="Hero Icon" />
                </motion.div>
            </div>

            <motion.div
                className={styles.description}
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
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
