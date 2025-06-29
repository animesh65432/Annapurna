import { Call } from "../service/call"


export const create = (recipeId: string) => Call({
    path: `/save/add?Id=${recipeId}`,
    method: "POST"
})

export const Get = () => Call({
    path: `/save/Get`,
    method: "GET"
})