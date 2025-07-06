import styles from "./Foodloading.module.scss"
import foodloadingsvg from "../../assets/noundinner.svg"

export default function Foodloading() {
    return (
        <div className={styles.Container}>
            <div className={styles.titlewithsvg}>
                <div>
                    <img src={foodloadingsvg} />
                </div>
                <div>
                    Sourcing best produce
                </div>
            </div>
        </div>
    )
}

