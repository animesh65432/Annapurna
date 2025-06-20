import React from 'react'
import { NavbarItems } from "../../utils"
import styles from "./Navbar.module.scss"
import { LogOut } from "lucide-react"

const Navbar: React.FC = () =>
    <>
        <div className={styles.upperNavContainer}>
            {NavbarItems.map((item) =>
                <div className={styles.navitem} key={item.name}>
                    <div><item.icon className={styles.navitemIcon} /></div>
                    <div>{item.name}</div>
                </div>)
            }
        </div>
        <div className={styles.lowerNavContainer}>
            <div className={styles.navitem}>
                <div><LogOut className={styles.navitemIcon} /></div>
                <div>Logout</div>
            </div>
        </div>
    </>


export default Navbar