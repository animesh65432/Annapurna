import { groq } from "../services/Groq"

export const generateSuggestion = async (key: string): Promise<string[]> => {
    const prompt = `List 10 famous Indian foods that start with the letters "${key}". Only return the names in a valid JSON array format, with no extra text or explanation.`;

    try {
        const response = await groq.chat.completions.create({
            messages: [
                {
                    role: "user",
                    content: prompt,
                },
            ],
            model: "llama3-70b-8192",
        });

        const rawText = response.choices[0]?.message?.content ?? "";

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
