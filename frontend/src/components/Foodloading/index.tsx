import styles from "./Foodloading.module.scss"

export default function Foodloading() {
    return (
        <div className={styles.Container}>
            <div className={styles.imgContainer}>
                <img src="/cooking.gif" />
            </div>
        </div>
    )
}
