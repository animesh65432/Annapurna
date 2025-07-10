import { groq } from "../services/Groq";

export const isDishOrRecipe = async (dish: string): Promise<string | null> => {
    try {
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: `You're an expert in Indian food and Indian food recipes. Tell me whether the following is a food name or a recipe: "${dish}". Just reply with "dish" or "recipe".`,
                },
            ],
            model: "llama-3.1-8b-instant",
        });

        const reply = response.choices?.[0]?.message?.content?.trim();
        return reply || null;
    } catch (error) {
        console.error("Error in isDishOrRecipe:", error);
        return null;
    }
};
