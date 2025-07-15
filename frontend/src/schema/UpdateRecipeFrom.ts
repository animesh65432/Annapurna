import { z } from "zod"

export const UpdateRecipeFrom = z.object({
    dish: z.string().min(1, { message: "Dish Name is required" }),
    variant: z.string().optional(),
    language: z.string().min(1, { message: "Please select any language" }),
    Nutrients: z.string().optional(),
})