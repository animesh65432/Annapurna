import React from 'react'
import { Link } from "react-router-dom"
import styles from "./NotFound.module.scss"

const NotFound: React.FC = () => {
    return (
        <div className={styles.Container}>
            <h1>404 - Page Not Found</h1>
            <Link
                to="/"
                className={styles.Goback}
            >
                Go back to Home
            </Link>
        </div >
    )
}

export default NotFound