import { useParams } from "react-router-dom"
import { useFecthrecipe } from "../../hooks/useFecthrecipe"
import Foodloading from "../Foodloading"
import Layout from "../Layout"
import { useEffect, useState } from "react"
import type { AnalysisRecipe as AnalysisRecipeTypes } from "../../types"
export default function Analysis() {
    const { id } = useParams()
    const [AnalysisRecipe, setAnalysisRecipe] = useState<AnalysisRecipeTypes | null>()

    const { fetchrecipe, isFecthrecipeloading } = useFecthrecipe()
    if (!id) {
        return
    }
    const fetch = async () => {
        const res = await fetchrecipe(id)
        setAnalysisRecipe(res)
    }
    useEffect(() => {
        fetch()
    }, [id])

    console.log(AnalysisRecipe?.dish)

    return (
        <Layout>
            {
                isFecthrecipeloading ? <Foodloading /> : <div></div>
            }
        </Layout>
    )
}
