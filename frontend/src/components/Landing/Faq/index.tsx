import React, { useState } from 'react';
import { faq } from '../../../utils';
import styles from './Faq.module.scss';
import { Plus, X } from 'lucide-react';
import { motion } from "framer-motion"
import { sideward } from "../../../utils"

const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setOpenIndex(prevIndex => (prevIndex === index ? null : index));
    };

    return (
        <motion.div className={styles.FaqsContainer} initial={sideward.initial}
            whileInView={sideward.animate}
            viewport={{ once: true }}>
            <span className={styles.title}>Frequently Asked Questions</span>
            {faq.map((fq, index) => (
                <div className={styles.faq} key={index} onClick={() => handleClick(index)}>
                    <div className={styles.questionRow}>
                        <div className={styles.question}>{fq.question}</div>
                        <div>{openIndex === index ? <X /> : <Plus />}</div>
                    </div>
                    {openIndex === index && <p className={styles.answer}>{fq.answer}</p>}
                </div>
            ))}
        </motion.div>
    );
};

export default Faq;
