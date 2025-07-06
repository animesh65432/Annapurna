import React from 'react'
import styles from "./Navbar.module.scss"
import { LogOut, LayoutDashboard, BookMarked } from "lucide-react"
import { useAuthstroe } from '../../store/useauth'
import { useNavigate } from "react-router-dom"

const Navbar: React.FC = () => {
    const navigate = useNavigate()
    const { token, removetoken } = useAuthstroe()
    return <>
        <div className={styles.upperNavContainer}>
            <div className={styles.navitem} onClick={() => navigate("/dashboard")} >
                <div><LayoutDashboard className={styles.navitemIcon} /></div>
                <div>Home</div>
            </div>
            {token &&
                <div className={styles.navitem} onClick={() => navigate("/save")}>
                    <div><BookMarked className={styles.navitemIcon} /></div>
                    <div>Saves</div>
                </div>
            }
        </div>
        <div className={styles.lowerNavContainer}>
            {token &&
                <div className={styles.navitem} onClick={removetoken}>
                    <div><LogOut className={styles.navitemIcon} /></div>
                </div>
            }
        </div>
    </>

}
export default Navbar