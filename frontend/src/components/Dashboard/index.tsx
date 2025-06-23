import React, { useState } from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"
import Serchinputbox from './Serchinputbox'
import PopularIndianDishes from './PopularIndianDishes'


const Dashboard: React.FC = () => {
    const [txt, settext] = useState<string | null>(null);

    const selectfromPopularIndianDishes = (dish: string) => {
        settext(dish);
    };
    return (
        <Layout>
            <div className={styles.Container}>
                <div className={styles.upper}>
                    <Serchinputbox txt={txt} />
                </div>
                <div className={styles.down}>
                    <PopularIndianDishes selectfromPopularIndianDishes={selectfromPopularIndianDishes} />
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard