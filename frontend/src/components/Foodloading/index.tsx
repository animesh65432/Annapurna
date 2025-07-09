import styles from "./Foodloading.module.scss"
import foodloadingsvg from "../../assets/noundinner.svg"
import { motion } from "framer-motion"

export default function Foodloading() {
    return (
        <div className={styles.Container}>
            <div className={styles.titlewithsvg}>
                <div>
                    <img src={foodloadingsvg} />
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], y: [10, 0, 10] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className={styles.animatedText}
                >
                    Sourcing best produce
                </motion.div>

            </div>
        </div>
    )
}

