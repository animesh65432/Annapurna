import { create } from "zustand";
import type { RecipeTypes } from "../types";

type RecipeStore = {
    recipe: RecipeTypes | null;
    setRecipe: (recipe: RecipeTypes) => void;
    clearRecipe: () => void;
};

export const useRecipeStore = create<RecipeStore>((set) => ({
    recipe: null,
    setRecipe: (recipe) => set({ recipe }),
    clearRecipe: () => set({ recipe: null }),
}));