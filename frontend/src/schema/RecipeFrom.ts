import { z } from "zod"


export const RecipeFromSchema = z.object({
    dish: z.string().min(1, { message: "Dish Name is required" }),
    variant: z.string().min(1, { message: "Please select any variant" }),
    language: z.string().min(1, { message: "Please select any language" }),
    Cabs: z.string().min(1, { message: "Please select carbs low or high" }),
    Calories: z.string().min(1, { message: "Please select Calories low or high" }),
})
