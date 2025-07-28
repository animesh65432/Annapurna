import { Call } from "@/service/call"

export const Getsuggestions = (prompt: string) => Call({
    path: "/ai/generate-suggestion",
    request: {
        prompt
    },
    method: "POST"
})

export const GenrateRecipe = (dish: string, variant: string, DishType: string) => Call({
    path: "/ai/generate-recipe",
    request: {
        dish,
        variant,
        DishType
    },
    method: "POST"
})

export const Isdetectingredient = (image: string) => Call({
    path: "/ai/detectIngredient",
    method: "POST",
    request: { image }
})