import { useState } from "react";
import { create } from "../api/save"


export function useSaverecipe() {
    const [isloadingSaverecipe, setisloadingSaverecipe] = useState<boolean>(false)

    const saverecipe = async (Id: string) => {
        setisloadingSaverecipe(true)
        try {
            const res = await create(Id)
            return res
        } finally {
            setisloadingSaverecipe(false)
        }
    }

    return { isloadingSaverecipe, saverecipe }
}