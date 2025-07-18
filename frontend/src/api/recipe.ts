import { Call } from "../service/call"

export const GetRecipebyId = (id: string) => Call({
    path: `/recipe/GetRecipe?id=${id}`,
    method: "GET"
})


export const downloadRecipePDF = (Id: string, dish: string) => Call({
    path: "/recipe/GenratePdf",
    method: "POST",
    request: {
        Id,
        dish
    },
    responseType: "blob"
})