import { Call } from "../service/call"


export const create = (recipeId: string, token: string) => Call({
    path: `/save/add?Id=${recipeId}`,
    method: "POST",
    request: {
        token
    }
})

export const GetAll = (token: string) => Call({
    path: `/save/Get`,
    method: "GET",
    request: {
        token
    }
})