import React from 'react'
import styles from "./Hwt.module.scss"
import { howitworks } from "../../../utils"

const Hwt: React.FC = () => {
    return (
        <div className={styles.Container}>
            <h3 className={styles.Title}>Simple Steps to <span className={styles.GetStartedSpan}>Get Started</span></h3>
            <div className={styles.howitworksContainer}>
                {
                    howitworks.map((work, index) => {
                        return <div key={index}>
                            <div><work.icon /></div>
                            <div>{work.title}</div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Hwt