export type RecipeTypes = {
    dish: string;
    funFact: string;
    motivationalMessage: string;
    Comparison: {
        before: Record<string, string>;
        after: Record<string, string>;
    };
    healthierVersion: {
        description: string;
        ingredients: string[];
        steps: string[];
        suggestionsInGredients: string[]
    };
    substitutions: {
        from: string;
        to: string;
        why: string;
    }[];
    variant: string;
    language: string;
    foodHistoryContext: string;
    id: string;
};
export type SavesRecipesTypes = {
    recipe: RecipeTypes
}

export type dishTypes = {
    id: string;
    name: string,
    image_url: string,
    cuisine: string,
    description: string,
    diet: string,
    prep_time: string
}
