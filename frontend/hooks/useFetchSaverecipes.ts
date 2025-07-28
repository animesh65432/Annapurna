import { useState } from "react";
import { GetAll } from "../api/save"

export function useSaverecipe() {
    const [IsFetchSaverecipes, SetIsFetchSaverecipes] = useState<boolean>(false)

    const saverecipe = async (Id: string) => {
        SetIsFetchSaverecipes(true)
        try {
            const res = await GetAll()
            console.log(res)
        } finally {
            SetIsFetchSaverecipes(false)
        }
    }

    return { IsFetchSaverecipes, saverecipe }
}