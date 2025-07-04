import React, { useState } from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"
import Serchinputbox from './Serchinputbox'
import PopularIndianDishes from './PopularIndianDishes'
import Foodloading from '../Foodloading'
import { useGenrateRecipe } from "../../hooks/useGenrateRecipe"


const Dashboard: React.FC = () => {
    const [txt, settext] = useState<string | null>(null);
    const { isGenrateRecipeloading, createRecipe, setisGenrateRecipeloading } = useGenrateRecipe()
    const selectfromPopularIndianDishes = (dish: string) => {
        settext(dish);
    };


    if (isGenrateRecipeloading) {
        return <Foodloading />
    }

    return (
        <Layout>
            <div className={styles.Container}>
                <div className={styles.upper}>
                    <Serchinputbox txt={txt} createRecipe={createRecipe} setisGenrateRecipeloading={setisGenrateRecipeloading} />
                </div>
                <div className={styles.down}>
                    <PopularIndianDishes selectfromPopularIndianDishes={selectfromPopularIndianDishes} />
                </div>
            </div>
        </Layout >
    )
}

export default Dashboard