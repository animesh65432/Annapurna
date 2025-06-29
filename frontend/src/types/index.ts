export type popularindianFoodstypes = {
    name: string,
    img: string
}

export type RecipeTypes = {
    dish: string;
    funFact: string;
    motivationalMessage: string;
    originalNutrition: {
        Calories: number;
        "Protein (g)": number;
        "Iron (mg)": number;
        "Fiber (g)": number;
        "Fat (g)": number;
    };
    nutritionComparison: {
        before: {
            Calories: number;
            "Protein (g)": number;
            "Iron (mg)": number;
            "Fiber (g)": number;
            "Fat (g)": number;
        };
        after: {
            Calories: number;
            "Protein (g)": number;
            "Iron (mg)": number;
            "Fiber (g)": number;
            "Fat (g)": number;
        };
    };
    healthierVersion: {
        description: string;
        ingredients: string[];
        steps: string[];
    };
    substitutions: {
        from: string;
        to: string;
        why: string;
    }[];
    variant: string;
    language: string;
    foodHistoryContext: string;
    id: string
};
