import { Call } from "../service/call"
import type { RecipeTypes } from "../types"


export const GetRecipebyId = (id: string) => Call({
    path: `/recipe/GetRecipe?id=${id}`,
    method: "GET"
})


export const downloadRecipePDF = (recipe: RecipeTypes) => Call({
    path: "/recipe/GenratePdf",
    method: "POST",
    request: {
        recipe
    },
    responseType: "blob"
})