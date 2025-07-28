import { z } from "zod"

export const RecipeFrom = z.object({
    dish: z.string().min(1, { message: "Dish Name is required" }),
    Nutrient: z.string(),
    DishType: z.string()
})