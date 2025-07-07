import React from 'react'
import styles from "./Navbar.module.scss"
import { LayoutDashboard } from "lucide-react"
import { IoEarthOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom"

const Navbar: React.FC = () => {
    const navigate = useNavigate()
    return <>
        <div className={styles.upperNavContainer}>
            <div className={styles.navitem} onClick={() => navigate("/")} >
                <div><LayoutDashboard className={styles.navitemIcon} /></div>
                <div>Home</div>
            </div>
            <div className={styles.navitem} onClick={() => navigate("/discover")} >
                <div><IoEarthOutline className={styles.navitemIcon} /></div>
                <div>Discover</div>
            </div>
        </div>
    </>

}
export default Navbar