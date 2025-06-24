import { Call } from "../service/call"

export const Getsuggestions = (prompt: string) => Call({
    path: "/ai/generate-suggestion",
    request: {
        prompt
    },
    method: "POST"
})

export const GenrateRecipe = (dish: string, variant: string, language: string, id: string) => Call({
    path: "/ai",
    request: {
        dish,
        variant,
        language,
        id
    },
    method: "POST"
})