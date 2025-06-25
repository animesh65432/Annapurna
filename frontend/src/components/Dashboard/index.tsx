import React, { useState } from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"
import Serchinputbox from './Serchinputbox'
import PopularIndianDishes from './PopularIndianDishes'
import Foodloading from '../Foodloading'
import { useGenrateRecipe } from "../../hooks/useGenrateRecipe"


const Dashboard: React.FC = () => {
    const [txt, settext] = useState<string | null>(null);
    const { isGenrateRecipeloading, createRecipe } = useGenrateRecipe()
    const selectfromPopularIndianDishes = (dish: string) => {
        settext(dish);
    };


    return (
        <Layout>
            {
                isGenrateRecipeloading ?
                    <Foodloading /> :
                    <div className={styles.Container}>
                        <div className={styles.upper}>
                            <Serchinputbox txt={txt} createRecipe={createRecipe} />
                        </div>
                        <div className={styles.down}>
                            <PopularIndianDishes selectfromPopularIndianDishes={selectfromPopularIndianDishes} />
                        </div>
                    </div>
            }
        </Layout >
    )
}

export default Dashboard