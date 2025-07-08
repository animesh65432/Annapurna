import React from 'react'
import Layout from '../Layout'
import PopularIndianDishes from './PopularIndianDishes'
import styles from "./Discover.module.scss"
import MobileMenu from '../Navbar/Mobile'

const Discover: React.FC = () => {
    return (
        <Layout>
            <div className={`${styles.Container} `}>
                <div className={`${styles.titleandsubtitles}`}>
                    <div className={styles.textlabel}>
                        <MobileMenu />
                        <span>
                            Popular Indian Dishes
                        </span>
                    </div>
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