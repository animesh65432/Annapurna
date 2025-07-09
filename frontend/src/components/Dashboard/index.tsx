import React from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"
import Serchinputbox from './Serchinputbox'
import { useGenrateRecipe } from "../../hooks/useGenrateRecipe"


const Dashboard: React.FC = () => {
    const { isGenrateRecipeloading, createRecipe, setisGenrateRecipeloading } = useGenrateRecipe()
    return (
        <Layout>
            <div className={styles.Container}>
                <Serchinputbox isGenrateRecipeloading={isGenrateRecipeloading} createRecipe={createRecipe} setisGenrateRecipeloading={setisGenrateRecipeloading} />
            </div>
        </Layout >
    )
}

export default Dashboard