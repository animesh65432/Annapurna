import config from "../config";
import { groq } from "../services/Groq";

export const usefindimgformgoogle = async (DishOrRecipe: string): Promise<string> => {
    try {
        console.log("Finding image...");

        const groqResponse = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `Input: "${DishOrRecipe}". 

Step 1: If it's a full recipe, extract and return only the dish name. 
Step 2: Identify the Indian state or regional cuisine the dish is traditionally associated with (like Assamese, Punjabi, Bengali, etc.).
Step 3: If the dish is popular across all of India (e.g. Biryani, Butter Chicken), return "Indian" as the state.

⚠️ Output format must be exactly: 
Dish: <Dish Name>
State: <State Name>

No explanation. No markdown. No extra lines. Just the result in the exact format above.`,
                },
            ],
            model: "deepseek-r1-distill-llama-70b",
        });

        const rawOutput = groqResponse.choices?.[0]?.message?.content?.trim() || "";

        const dishMatch = rawOutput.match(/Dish:\s*(.+)/i);
        const stateMatch = rawOutput.match(/State:\s*(.+)/i);

        const dishName = dishMatch?.[1]?.trim() || DishOrRecipe;
        const state = stateMatch?.[1]?.trim() || "Indian";

        const query = `${dishName} ${state} traditional Indian food `;

        console.log("Querying Google:", query);

        const res = await fetch(
            `https://www.googleapis.com/customsearch/v1?key=${config.GOOGLE_API_KEY}&cx=${config.GOOGLE_CX}&q=${encodeURIComponent(query)}&searchType=image&imgType=photo&num=5`
        );

        const data = await res.json();

        if (!data.items || data.items.length === 0) {
            console.error("No image results found.");
            return "https://via.placeholder.com/400x300?text=No+Image+Found";
        }

        return data.items[0].link;
    } catch (err) {
        console.error("Error fetching image from Google:", err);
        return "https://via.placeholder.com/400x300?text=Image+Fetch+Error";
    }
};
