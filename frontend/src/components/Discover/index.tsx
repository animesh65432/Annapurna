import React from 'react'
import Layout from '../Layout'
import styles from "./Discover.module.scss"

const Discover: React.FC = () => {
    return (
        <Layout>
            <div className={styles.Container}>
                <div className={styles.textlabel}>
                    Popular Indian Dishes
                </div>
            </div>
        </Layout>
    )
}

export default Discover