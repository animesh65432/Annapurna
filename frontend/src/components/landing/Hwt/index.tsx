import { howitworks } from "../../../utils";
import styles from "./Hwt.module.scss";
import { containerVariants } from "../../../utils";
import { motion, easeOut } from "framer-motion";

const enhancedItemVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: easeOut
        }
    }
};

export default function Hwt() {
    return (
        <section id="howitworks" className={styles.Container}>
            <motion.div
                className={styles.HeaderContainer}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h2 className={styles.ContainerTitle}>How It Works</h2>
                {/* <p className={styles.Subtitle}>
                    Follow these simple steps to get started with our platform
                </p> */}
            </motion.div>

            <motion.div
                className={styles.WorkContainer}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {howitworks.map((work, index) => (
                    <motion.div
                        key={index}
                        className={styles.Work}
                        variants={enhancedItemVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -5,
                            transition: { duration: 0.3, ease: "easeOut" }
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        <div className={`${styles.HowItWorkContainer} ${index % 2 !== 0 ? styles.Reverse : ''}`}>
                            <div className={styles.ContentSection}>
                                <div className={styles.StepNumber}>
                                    <span>{String(index + 1).padStart(2, '0')}</span>
                                </div>
                                <div className={styles.TitleAndDescription}>
                                    <h3 className={styles.StepTitle}>{work.title}</h3>
                                    <p className={styles.StepDescription}>{work.des}</p>
                                </div>
                            </div>

                            <div className={styles.ImageSection}>
                                <div className={styles.ImageContainer}>
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        loading="lazy"
                                        className={styles.StepImage}
                                    />
                                    <div className={styles.ImageOverlay}></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}