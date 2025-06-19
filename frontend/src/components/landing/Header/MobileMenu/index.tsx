import { motion } from "framer-motion";
import styles from "./MobileMenu.module.scss";
import { slideLeftFade } from "../../../../utils"

export default function MobileMenu() {
    return (
        <motion.div
            className={styles.MobileMenuContainer}
            initial={slideLeftFade.initial}
            animate={slideLeftFade.animate}
            exit={slideLeftFade.exit}
            transition={slideLeftFade.transition}
        >
            <div>
                <a href="#howitworks">How it Works</a>

            </div>
            <div>
                <a href='#ContactUs'>Contact Us</a>
            </div>
            <button className={styles.Getstarted}>Get Started</button>
        </motion.div>
    );
}
