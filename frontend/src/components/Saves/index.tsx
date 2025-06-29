import Layout from "../Layout"
import { useFecthallsaverecipes } from "../../hooks/useFecthallsaverecipes"
import { useEffect } from "react"
import SavesSkeleton from "./SavesSkeleton"

export default function Saves() {
    const { fecthallsaves, isFecthallsaverecipesloading } = useFecthallsaverecipes()

    const fecth = async () => {
        await fecthallsaves()
    }

    useEffect(() => {
        fecth()
    }, [])


    return (
        <Layout>
            {isFecthallsaverecipesloading ? <SavesSkeleton /> : <div></div>}
        </Layout>
    )
}
