import React from 'react'
import styles from "./Herosection.module.css"
import { motion } from "framer-motion"

const Herosection: React.FC = () => {
    return (
        <motion.div className={styles.HerosectionContainer} initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} >
            <div className={styles.TitleandimageConainer}>
                <div className={styles.TitleContainer}>
                    <h1>
                        Traditional Taste, <br />
                        Smarter Nutrition
                    </h1>
                </div>


                <div className={styles.indianfood} >
                    <img src='/landing/image.png' />
                </div>

            </div>
        </motion.div>
    )
}

export default Herosection