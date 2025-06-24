import { Call } from "../service/call"


export const GetRecipebyId = (id: string) => Call({
    path: `/recipe/GetRecipe?id=${id}`,
    method: "GET"
})