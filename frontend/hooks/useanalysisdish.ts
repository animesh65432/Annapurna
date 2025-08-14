import { useState } from 'react'
import { Isdetectdish } from "@/api/ai"

export function useanalysisdish() {
    const [IsanalysisDishLoading, SetIsanalysisDishLoading] = useState<boolean>(false)
    const [analysisdishname, setanalysisdishname] = useState<string>("")
    const analysisdish = async (image: string) => {
        SetIsanalysisDishLoading(true)
        try {
            const response = await Isdetectdish(image) as { dishName: string }
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