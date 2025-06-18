import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import { Menu, X } from "lucide-react"
import MobileMenu from './MobileMenu';
export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState<boolean>(false)
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY + window.innerHeight > window.innerHeight) {
                console.log("call")
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
                    <p>Annapurna Ai</p>
                </div>
                <div className={styles.middleheadercontainer}>
                    <div>How it Works</div>
                    <div>Contact Us</div>
                </div>
                <div>
                    <button className={styles.headerbutton}>Get Started </button>
                </div>
                <div className={styles.MenuIconContainer} onClick={() => setMenuOpen((prev) => !prev)}>
                    {isMenuOpen ? <X className={styles.MenuIcon} /> : <Menu className={styles.MenuIcon} />}
                </div>
            </div>
            {isMenuOpen && <MobileMenu />}
        </>
    );
}
