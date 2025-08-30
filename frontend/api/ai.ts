import { Call } from "@/service/call"

export const Getsuggestions = (prompt: string, lan: string) => Call({
    path: "/ai/generate-suggestion",
    request: {
        prompt,
        lan
    },
    method: "POST"
})

export const GenrateRecipe = (dish: string, variant: string, DishType: string, language?: string) => Call({
    path: "/ai/generate-recipe",
    request: {
        dish,
        variant,
        DishType
    },
    method: "POST"
})

export const Isdetectdish = (image: string, lan: string) => Call({
    path: "/ai/detectdishes",
    method: "POST",
    request: { image, lan }
})