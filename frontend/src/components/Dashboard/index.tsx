import React, { useState } from 'react'
import Layout from '../Layout'
import styles from "./Dashboard.module.scss"
// import Serchinputbox from './Serchinputbox'
// import { useGenrateRecipe } from "../../hooks/useGenrateRecipe"
import MobileMenu from '../Navbar/Mobile'
import LanguageSelect from './Serchinputbox/LanguageSelect'
import UpdateSerchInputBox from './UpdateSerchInputBox'


const Dashboard: React.FC = () => {
    const [language, setlanguage] = useState<string>("")
    // const { isGenrateRecipeloading, createRecipe, setisGenrateRecipeloading } = useGenrateRecipe()
    return (
        <Layout>
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
                {/* <Serchinputbox language={language} isGenrateRecipeloading={isGenrateRecipeloading} createRecipe={createRecipe} setisGenrateRecipeloading={setisGenrateRecipeloading} /> */}
                <UpdateSerchInputBox />
            </div>
        </Layout >
    )
}

export default Dashboard