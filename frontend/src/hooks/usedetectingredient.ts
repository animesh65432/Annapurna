import { useState } from "react"
import { Isdetectingredient } from "../api/ai"

export const usedetectingredient = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const detectingredient = async (file: File): Promise<string | null> => {
        try {
            setIsLoading(true)
            setError(null)

            const base64 = await toBase64(file)
            const ingredients = await Isdetectingredient(base64) as string
            console.log(ingredients)
            return ingredients
        } catch (err: any) {
            console.log(err)
            setError(err.message || "Detection failed")
            return null
        } finally {
            setIsLoading(false)
        }
    }
    console.log(isLoading)

    return { detectingredient, isLoading, error }
}

export default usedetectingredient

const toBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => resolve(reader.result as string)
        reader.onerror = (err) => reject(err)
    })
}
