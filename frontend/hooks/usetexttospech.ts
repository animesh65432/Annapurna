import { Call } from "@/service/call"
import { useState } from "react"
import { useTranslation } from "react-i18next"


export const usetexttospech = () => {
    const { i18n } = useTranslation()
    const [IsLoading, setloading] = useState(false)

    async function call(text: string) {
        setloading(true)
        try {
            const response = await Call({
                method: "POST",
                path: "/spech/translatespech",
                request: {
                    text,
                    target_language_code: i18n.language
                }
            }) as { audioContent: string }

            const audio = new Audio(`data:audio/mp3;base64,${response.audioContent}`);
            audio.play()
        }
        finally {
            setloading(false)
        }
    }

    return { call, IsLoading }
}