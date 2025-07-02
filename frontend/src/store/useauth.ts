import { create } from "zustand"
import jscookie from "js-cookie"

type RecipeStore = {
    token: string | null,
    addtoken: (token: string) => void,
    removetoken: () => void
};

function checkuserhastokenOrNot(): string | null {
    const token = jscookie.get("token")
    console.log(token)
    if (token) {
        return token
    }
    else {
        return null
    }
}

export const useAuthstroe = create<RecipeStore>((set) => ({
    token: checkuserhastokenOrNot(),
    addtoken: (token) => set({ token }),
    removetoken: () => set(() => {
        jscookie.remove("token")
        return {
            token: null
        }
    })
}))