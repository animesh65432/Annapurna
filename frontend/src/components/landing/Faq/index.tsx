import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { faq, faqitemVariants, faqcontainerVariants, answerVariants } from "../../../utils";
import styles from "./Faq.module.scss";


const Faq: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState<null | number>(null);

    const toggleFaq = (index: number) => {
        setCurrentIndex(currentIndex === index ? null : index);
    };

    return (
        <div className={styles.container}>
            <motion.div
                className={styles.header}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <h2 className={styles.title}>Frequently Asked Questions</h2>
            </motion.div>

            <motion.div
                className={styles.faqContainer}
                variants={faqcontainerVariants}
                initial="hidden"
                animate="visible"
            >
                {faq.map((fq, index) => (
                    <motion.div
                        key={index}
                        className={`${styles.faqItem} ${currentIndex === index ? styles.active : ''}`}
                        variants={faqitemVariants}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                    >
                        <motion.div
                            className={styles.question}
                            onClick={() => toggleFaq(index)}
                            whileTap={{ scale: 0.98 }}
                        >
                            <span className={styles.questionText}>{fq.question}</span>
                            <motion.div
                                className={styles.icon}
                                animate={{ rotate: currentIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </motion.div>

                        <AnimatePresence>
                            {currentIndex === index && (
                                <motion.div
                                    className={styles.answerWrapper}
                                    variants={answerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <div className={styles.answer}>
                                        {fq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Faq;