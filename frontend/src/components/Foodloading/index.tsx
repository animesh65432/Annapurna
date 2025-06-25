import styles from "./Foodloading.module.scss"
import Layout from "../Layout"

export default function Foodloading() {
    return (
        <Layout>
            <div className={styles.Container}>
                <div className={styles.imgContainer}>
                    <img src="/cooking.gif" alt="Cooking animation" />
                </div>
                <div className={styles.txt}>
                    Ma Annapurna is lovingly creating a recipe for you
                </div>
            </div>
        </Layout>
    )
}

