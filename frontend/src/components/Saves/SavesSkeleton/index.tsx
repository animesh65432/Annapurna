import styles from "./SavesSkeleton.module.scss"

export default function SavesSkeleton() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.userInfo}>
                    <div className={styles.username}></div>
                    <div className={styles.timestamp}></div>
                </div>
            </div>
            <div className={styles.content}>
                <div className={styles.textLine}></div>
                <div className={styles.textLine}></div>
                <div className={styles.textLineShort}></div>
            </div>
        </div>
    )
}