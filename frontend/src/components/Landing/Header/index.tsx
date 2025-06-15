import React, { useEffect, useState } from 'react'
import styles from "./Header.module.scss"
import { MenuIcon, X, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrolled, setScrolled] = useState<boolean>(false);
    const navigate = useNavigate();

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
        <section id='header'>
            <div className={`${styles.container} ${scrolled ? styles.scrolled : ''}`} >
                <div>
                    <a href="#header" >ANNAPURNA AI
                    </a>
                </div>
                <div className={styles.howitsworks}>
                    <a href="#howitsworks" >HOW IT'S WORKS
                    </a>
                </div>
                <div className={styles.getstarted} onClick={() => navigate("/home")}>
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
                    transition={{ duration: 0.7 }}>
                    <div >
                        <a href="#howitsworks" >HOW IT'S WORKS
                        </a>
                    </div>
                    <div className={styles.Getstartedmenu} onClick={() => navigate("/home")} >
                        GET STARTED
                        <ArrowRight />
                    </div>
                </motion.div>
            )}
        </section>

    )
}

export default Header