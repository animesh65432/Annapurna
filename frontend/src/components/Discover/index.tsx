import React from 'react'
import Layout from '../Layout'
import PopularIndianDishes from './PopularIndianDishes'
import styles from "./Discover.module.scss"

const Discover: React.FC = () => {
    return (
        <Layout>
            <div className={styles.Container}>
                <div className={styles.titleandsubtitles}>
                    <div className={styles.textlabel}>Popular Indian Dishes</div>
                    <div className={styles.subtitle}>Discover the rich flavors of authentic Indian cuisine</div>
                </div>
                <div className={styles.PopularIndianDishesContainer}>
                    <PopularIndianDishes />
                </div>
            </div>
        </Layout>
    )
}

export default Discover