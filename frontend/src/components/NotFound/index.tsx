import React from 'react'
import styles from "./NotFound.module.scss"
import { useNavigate } from "react-router-dom"

const NotFound: React.FC = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.Container}>
            <h1>404 - Page Not Found</h1>
            <button
                onClick={() => navigate(-1)}
                className={styles.Goback}
            >
                Go back to Home
            </button>
        </div >
    )
}

export default NotFound