import config from "../config";
import { groq } from "../services/Groq";

export const usefindimgformgoogle = async (DishOrRecipe: string): Promise<string> => {
    const groqResponse = await groq.chat.completions.create({
        messages: [{
            role: "user",
            content: `Input: "${DishOrRecipe}". Determine if it's a dish name or a recipe. If it's a recipe, return only the dish name. If it's already a dish name, return it as-is. ⚠️ Return ONLY the dish name — no explanation, no thinking, no markdown, no HTML, no comments. Just output the name like: Butter Chicken`
        }],
        model: "deepseek-r1-distill-llama-70b"
    });

    const rawOutput = groqResponse.choices?.[0]?.message?.content?.trim() || "";

    const dishname = rawOutput
        .replace(/<think>[\s\S]*?<\/think>/gi, "")
        .replace(/["'“”`]/g, "")
        .toLowerCase()
        .replace(/\s+/g, " ")
        .trim();

    if (!dishname) {
        console.error("No dish name returned by Groq.");
        return "";
    }

    const query = `${dishname} food dish photo site:allrecipes.com OR site:bbcgoodfood.com OR site:foodnetwork.com`;

    const res = await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${config.GOOGLE_API_KEY}&cx=${config.GOOGLE_CX}&q=${encodeURIComponent(query)}&searchType=image`
    );

    const data = await res.json();

    console.log(data)

    if (!data.items || data.items.length === 0) {
        console.warn("No image results found from Google Search.");
        return "";
    }
    return data.items[0].link;
};
