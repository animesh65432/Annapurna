import { groq } from "../services/Groq"

export const generateSuggestion = async (key: string, language: string): Promise<string[]> => {
    const checkAlreadyDishPrompt = `Is "${key}" the name of a famous Indian dish? Reply with only "yes" or "no".`;
    const suggestionPrompt = `List 5 famous Indian foods that start with the letters "${key}". Only return the names in a valid JSON array format, with no extra text or explanation.`;

    try {
        const dishCheckResponse = await groq.chat.completions.create({
            messages: [{ role: "user", content: checkAlreadyDishPrompt }],
            model: "llama3-70b-8192",
        });

        const isDish = dishCheckResponse.choices[0]?.message?.content?.trim().toLowerCase();

        if (isDish === "yes") {
            return [];
        }
        const suggestionResponse = await groq.chat.completions.create({
            messages: [{ role: "user", content: suggestionPrompt }],
            model: "llama3-70b-8192",
        });

        const rawText = suggestionResponse.choices[0]?.message?.content ?? "";

        const match = rawText.match(/\[.*\]/s);

        if (!match) {
            console.warn("No valid JSON array found in response:", rawText);
            return [];
        }

        const suggestions = JSON.parse(match[0]);
        return Array.isArray(suggestions) ? suggestions : [];
    } catch (error) {
        console.error("Error generating suggestions:", error);
        return [];
    }
};
