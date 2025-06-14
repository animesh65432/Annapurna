import React from 'react'
import { Twitter, Github } from "lucide-react"
import styles from './Footer.module.scss'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.text}>
                    © {new Date().getFullYear()} Fromly. All rights reserved.
                </div>

                <div className={styles.socials}>
                    <a href="https://github.com/animesh65432/Annapurna" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <Github className={styles.icon} />
                    </a>
                    <a href="https://x.com/animeshdut16137" target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
                        <Twitter className={styles.icon} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
