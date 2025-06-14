import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import { MenuIcon, X, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"



const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY + window.innerHeight > window.innerHeight);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className={`${styles.container} ${scrolled ? styles.scrolled : ''}`} >
                <div>ANNAPURNA AI</div>
                <div className={styles.howitsworks}>HOW IT'S WORKS</div>
                <div className={styles.getstarted}>
                    GET STARTED
                    <ArrowRight />
                </div>
                <div className={styles.Menucion} onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <MenuIcon size={28} />}
                </div>

            </div>
            {menuOpen && (
                <motion.div className={styles.mobileMenu} initial={{ x: 100, opacity: 0, }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1 }}>
                    <div >HOW IT'S WORKS</div>
                    <div className={styles.Getstartedmenu} >
                        GET STARTED
                        <ArrowRight />
                    </div>
                </motion.div>
            )}
        </>

    )
}

export default Header