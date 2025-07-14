import React, { useEffect, useState } from 'react'
import styles from "./UpdateSerchInputBox.module.scss"
import { placeholders } from "../../../utils"
import { Sprout, BicepsFlexed, Soup, Paperclip, ArrowRight } from "lucide-react"

const UpdateSerchInputBox: React.FC = () => {
    const [placeholderIndex, setPlaceholderIndex] = useState(0)
    const [dish, setdish] = useState("")

    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
        }, 2000)
        if (dish.length > 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [dish])

    return (
        <div className={styles.Container}>
            <div className={styles.textlabel}>Amp your recipes with healthy twists</div>
            <div className={styles.Serchinputbox}>
                <input className={styles.inputbox} placeholder={placeholders[placeholderIndex]} />
                <div className={styles.SerchinputboxOptions}>
                    <div className={styles.SerchinputboxOptionFirst}>
                        <div className={styles.option}>
                            <Sprout />
                        </div>
                        <div className={styles.option}>
                            <BicepsFlexed />
                        </div>
                        <div className={styles.option}>
                            <Soup />
                        </div>
                    </div>
                    <div className={styles.SerchinputboxOptionSecond}>
                        <div>
                            <Paperclip className={styles.optionfile} />
                        </div>
                        <div>
                            <ArrowRight className={styles.arrowroud} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UpdateSerchInputBox