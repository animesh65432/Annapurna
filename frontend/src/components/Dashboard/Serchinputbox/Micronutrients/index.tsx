import React from 'react'
import { MicronutrientsOptions } from "../../../../utils"
import styles from "./Micronutrients.module.scss"

const Micronutrients: React.FC = () => {
    return (
        <div className={styles.MicronutrientContainer}>
            {MicronutrientsOptions.map((micronutrient) =>
                <div key={micronutrient} className={styles.micronutrient}>
                    <div className={styles.checkbox}></div>
                    {micronutrient}
                </div>)
            }
        </div>
    )
}

export default Micronutrients