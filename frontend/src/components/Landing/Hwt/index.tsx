import React from 'react';
import styles from "./Hwt.module.scss";
import { hwt, upward } from "../../../utils";
import { motion } from "framer-motion"


const Howitsworks: React.FC = () => {
    return (
        <section id="howitsworks" className={styles.container}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }} className={styles.wrapper}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        How It <span className={styles.titleAccent}>Works</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Get started in minutes with our simple, powerful platform
                    </p>
                </div>

                <div className={styles.stepsContainer}>
                    {hwt.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={upward.initial}
                            whileInView={upward.animate}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >

                            {index < hwt.length - 1 && (
                                <div className={styles.connectingLine}></div>
                            )}

                            <div className={`${styles.step} ${index % 2 === 0 ? styles.stepLeft : styles.stepRight}`}>
                                <div className={styles.content}>
                                    <div className={styles.numberContainer}>
                                        <div className={styles.number}>
                                            <span>{index + 1}</span>
                                            <div className={styles.numberGlow}></div>
                                        </div>
                                    </div>

                                    <h3 className={styles.stepTitle}>
                                        {step.title}
                                    </h3>


                                    <div className={styles.decorativeElements}>
                                        <div className={styles.dot}></div>
                                        <div className={styles.dot}></div>
                                        <div className={styles.dot}></div>
                                    </div>
                                </div>

                                <div className={styles.imageContainer}>
                                    <div className={styles.imageWrapper}>
                                        <img
                                            src={step.image}
                                            alt={step.title}
                                            className={styles.image}
                                        />
                                        <div className={styles.imageOverlay}></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section >
    );
};

export default Howitsworks;
