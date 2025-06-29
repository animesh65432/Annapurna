import { Call } from "../service/call"


export const create = (recipeId: string) => Call({
    path: `/save/add?Id=${recipeId}`,
    method: "POST"
})

export const GetAll = () => Call({
    path: `/save/Get`,
    method: "GET"
})