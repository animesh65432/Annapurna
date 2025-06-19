import React from 'react'
import { Github, Twitter } from "lucide-react"
import styles from "./Footer.module.scss"

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    © {new Date().getFullYear()} Fromly. All rights reserved.
                </div>

                <div className={styles.socials}>
                    <a href="https://github.com/animesh65432/Annapurna" target="_blank" rel="noopener noreferrer">
                        <Github />
                    </a>
                    <a href="https://x.com/animeshdut16137" target="_blank" rel="noopener noreferrer">
                        <Twitter />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
