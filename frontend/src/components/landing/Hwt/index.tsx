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
                        {index % 2 === 0 ? <div>
                            <div>
                                <div>
                                    <span>0{index}</span>
                                    {work.title}
                                </div>
                                <div>
                                    {work.des}
                                </div>
                            </div>
                            <div>
                                <img src={work.image} />
                            </div>
                        </div> : <div>
                            <div>
                                <img src={work.image} />
                            </div>
                            <div>
                                <div>
                                    <span>0{index}</span>
                                    {work.title}
                                </div>
                                <div>
                                    {work.des}
                                </div>
                            </div>
                        </div>}
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}