import { Call } from "../service/call"

export const Getsuggestions = (prompt: string) => Call({
    path: "/ai/generate-suggestion",
    request: {
        prompt
    },
    method: "POST"
})

export const GenrateRecipe = (Calories: string, Cabs: string, dish: string, variant: string, language: string) => Call({
    path: "/ai/generate-recipe",
    request: {
        dish,
        variant,
        language,
        Calories,
        Cabs
    },
    method: "POST"
})