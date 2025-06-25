import { useParams } from "react-router-dom"
import { useFecthrecipe } from "../../hooks/useFecthrecipe"
import styles from "./RecipeLayout.module.scss"
import Foodloading from "../Foodloading"
import Layout from "../Layout"
import React, { useEffect } from "react"
import { useRecipeStore } from "../../store/Recipe"
import { useNavigate } from "react-router-dom"
import { nutritionTranslations } from "../../utils"
import Header from "./Header"
type Props = {
    children: React.ReactNode
}
export default function RecipeLayout({ children }: Props) {
    const { id } = useParams()
    const { setRecipe, recipe } = useRecipeStore()
    const navigate = useNavigate()
    const { fetchrecipe, isFecthrecipeloading } = useFecthrecipe()
    if (!id) {
        return <Layout><Foodloading /></Layout>
    }
    const fetch = async () => {
        if (!recipe) {
            const res = await fetchrecipe(id)
            setRecipe(res)
        }
        else {
            return
        }
    }
    useEffect(() => {
        fetch()
    }, [id])

    if (!recipe || !recipe) {
        return <Layout><Foodloading /></Layout>
    }

    const title = nutritionTranslations[recipe.language]
    console.log(title, recipe.language)


    const navigate_to_path = (path: string) => {
        navigate(path)
    }

    return (
        <Layout>
            {
                isFecthrecipeloading ?
                    <Foodloading /> :
                    <div className={styles.Container} >
                        <div className={styles.HeaderContainer}>
                            <Header />
                            <div className={styles.Navbar}>
                                <button className={styles.NavItem} onClick={() => navigate_to_path(`/recipe/${id}`)}>{title.recipe}</button>
                                <button className={styles.NavItem} onClick={() => navigate_to_path(`/WhyTheseChagnes/${id}`)}>{title.whyTheseChanges}</button>
                            </div>

                        </div>
                        <div className={styles.MainContainer}>
                            {children}
                        </div>
                    </div>
            }
        </Layout>
    )
}
