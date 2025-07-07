import React from 'react'
import styles from "./Navbar.module.scss"
import { LayoutDashboard } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Navbar: React.FC = () => {
    const navigate = useNavigate()
    return <>
        <div className={styles.upperNavContainer}>
            <div className={styles.navitem} onClick={() => navigate("/")} >
                <div><LayoutDashboard className={styles.navitemIcon} /></div>
                <div>Home</div>
            </div>
        </div>
    </>

}
export default Navbar