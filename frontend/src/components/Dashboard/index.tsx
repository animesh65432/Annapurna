import React, { useState } from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"
import MobileMenu from '../Navbar/Mobile'
import LanguageSelect from './Serchinputbox/LanguageSelect'
import UpdateSerchInputBox from './UpdateSerchInputBox'
import { optionsforLanguages } from "../../utils"
import Foodloading from '../Foodloading'
import { useGenrateRecipe } from "../../hooks/useGenrateRecipe"


const Dashboard: React.FC = () => {
    const { isGenrateRecipeloading, createRecipe, setisGenrateRecipeloading } = useGenrateRecipe()
    const [language, setlanguage] = useState<{ label: string, value: string }>(optionsforLanguages[optionsforLanguages.length - 1])
    return (
        <Layout>
            {isGenrateRecipeloading ?
                <Foodloading />
                :
                <div className={styles.Container}>
                    <div className={styles.upperContainer}>
                        <div className={styles.titlewithIcon}>
                            <span className={styles.MenuIcon}>
                                <MobileMenu />
                            </span>
                            <div className={styles.Headingtitle}>Annapurna Ai</div>
                        </div>
                        <div className={styles.SelectContainer}>
                            <LanguageSelect setlanguage={setlanguage} language={language} />
                        </div>
                    </div>
                    <UpdateSerchInputBox setisGenrateRecipeloading={setisGenrateRecipeloading} language={language} createRecipe={createRecipe} />
                </div>
            }
        </Layout >
    )
}

export default Dashboard