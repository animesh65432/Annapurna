import { motion } from "framer-motion";
import styles from "./MobileMenu.module.scss";
import { slideLeftFade } from "../../../../utils"
import { useNavigate } from "react-router-dom"

export default function MobileMenu() {
    const navigate = useNavigate()
    return (
        <motion.div
            className={styles.MobileMenuContainer}
            initial={slideLeftFade.initial}
            animate={slideLeftFade.animate}
            exit={slideLeftFade.exit}
            transition={slideLeftFade.transition}
        >
            <a href="#howitworks">How it Works</a>
            <a href='#ContactUs'>Contact Us</a>
            <button className={styles.Getstarted} onClick={() => navigate("/dashboard")}>Get Started</button>
        </motion.div>
    );
}
