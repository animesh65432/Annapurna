import { useState } from "react";
import { create } from "../api/save"
import { useAuthstore } from "@/store/useauth";


export function useSaverecipe() {
    const [isloadingSaverecipe, setisloadingSaverecipe] = useState<boolean>(false)
    const { token } = useAuthstore()

    const saverecipe = async (Id: string) => {
        setisloadingSaverecipe(true)
        try {
            const res = await create(Id, token!)
            return res
        } finally {
            setisloadingSaverecipe(false)
        }
    }

    return { isloadingSaverecipe, saverecipe }
}