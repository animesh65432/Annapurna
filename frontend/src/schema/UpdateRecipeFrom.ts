import { z } from "zod"

export const UpdateRecipeFrom = z.object({
    dish: z.string().min(1, { message: "Dish Name is required" }),
    variant: z.string(),
    language: z.string().min(1, { message: "Please select any language" }),
    Nutrient: z.string(),
    DishType: z.string()
})