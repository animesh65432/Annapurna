import React from 'react'
import styles from "./Pageloading.module.scss"
import { LoaderCircle } from "lucide-react"

const PageLaoding: React.FC = () => {
    return (
        <div className={styles.Container}>
            <div><LoaderCircle className={styles.loader} width={40} height={40} /></div>
        </div>
    )
}

export default PageLaoding