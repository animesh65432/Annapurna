import { howitworks } from "../../../utils";
import styles from "./Hwt.module.scss";
import { containerVariants, itemVariants } from "../../../utils"
import { motion } from "framer-motion"

export default function Hwt() {
    return (
        <section id="howitworks" className={styles.Container}>
            <h2 className={styles.Containertitle}>How it works</h2>
            <motion.div className={styles.workConatiner} variants={containerVariants}
                initial="hidden"
                animate="visible">
                {howitworks.map((work, index) => (
                    <motion.div key={index} className={styles.work} variants={itemVariants}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.2 }
                        }}>
                        <div className={styles.index}>
                            {index + 1}
                            <work.icon />
                        </div>
                        <div className={styles.title}>{work.title}</div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}