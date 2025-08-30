import { useState } from 'react'
import { Isdetectdish } from "@/api/ai"
import { useTranslation } from "react-i18next";

export function useanalysisdish() {
    const [IsanalysisDishLoading, SetIsanalysisDishLoading] = useState<boolean>(false)
    const [analysisdishname, setanalysisdishname] = useState<string>("")
    const { i18n } = useTranslation()
    const analysisdish = async (image: string) => {
        SetIsanalysisDishLoading(true)
        try {
            const response = await Isdetectdish(image, i18n.language) as { dishName: string }
            console.log(response.dishName)
            setanalysisdishname(response.dishName)
        } catch (error) {
            console.log(error)
        }
        finally {
            SetIsanalysisDishLoading(false)
        }

    }

    return { IsanalysisDishLoading, analysisdish, analysisdishname }
}

export default useanalysisdish