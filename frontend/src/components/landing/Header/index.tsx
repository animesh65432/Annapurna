import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Menu, X } from "lucide-react"
import MobileMenu from './MobileMenu';
import { useNavigate } from "react-router-dom"
export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const navigate = useNavigate()
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={`${styles.headercontainer} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.headerlogo}>
                    <img src="/icon.jpeg" alt="logo" className={styles.headericon} />
                    <a href='#Home'>Annapurna Ai</a>
                </div>
                <div className={styles.middleheadercontainer}>
                    <a href="#howitworks">How it Works</a>
                    <a href='#ContactUs'>Contact Us</a>
                </div>
                <div>
                    <button className={styles.headerbutton} onClick={() => navigate("/dashboard")}>Get Started </button>
                </div>
                <div className={styles.MenuIconContainer} onClick={() => setMenuOpen((prev) => !prev)}>
                    {isMenuOpen ? <X className={styles.MenuIcon} /> : <Menu className={styles.MenuIcon} />}
                </div>
            </div >
            {isMenuOpen && <MobileMenu />
            }
        </>
    );
}
