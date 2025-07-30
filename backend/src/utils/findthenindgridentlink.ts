import { groq } from "../services/Groq";
export async function findIngredientKeyword(ingredient: string): Promise<string> {

    const res = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: `Input: "${ingredient}".
Remove any quantity like "1 cup", "200g", "500 grams", etc.
Then return only the best single-word product keyword for Indian shopping platforms like Flipkart and Blinkit.
⚠️ Your response must be only the cleaned product name or keyword — no explanation, no list, no markdown, no extra words.`,
            },
        ],
        model: "llama-3.3-70b-versatile",
    });

    return res.choices?.[0]?.message?.content?.trim() ?? "";
}
export async function getIngredientSearchLinks(ingredient: string) {
    const keyword = await findIngredientKeyword(ingredient);
    const encoded = encodeURIComponent(keyword);
    console.log(encoded)

    return {
        amazon: `https://www.amazon.in/s?k=${encoded}`,
        flipkart: `https://www.flipkart.com/search?q=${encoded}`,
        blinkit: `https://www.blinkit.com/s/?q=${encoded}`,
    };
}

export async function GetsuggestionsArrays(Ingredients: string[]) {
    const suggestionsInGredients = []
    let ingredient
    for (let i = 0; i < Ingredients.length; i++) {
        ingredient = await findIngredientKeyword(Ingredients[i])
        suggestionsInGredients.push(ingredient)
    }

    return suggestionsInGredients
}


