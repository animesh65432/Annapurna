import React from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"
import Serchinputbox from './Serchinputbox'
import PopularIndianDishes from './PopularIndianDishes'


const Dashboard: React.FC = () => {
    return (
        <Layout>
            <div className={styles.Container}>
                <div className={styles.upper}>
                    <Serchinputbox />
                </div>
                <div className={styles.down}>
                    <PopularIndianDishes />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard