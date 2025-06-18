import { motion } from "framer-motion";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu() {
    return (
        <motion.div
            className={styles.MobileMenuContainer}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        >
            <div>How it Works</div>
            <div>Contact Us</div>
            <button className={styles.Getstarted}>Get Started</button>
        </motion.div>
    );
}
