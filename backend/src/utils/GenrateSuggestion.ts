import { AI_Model } from "../services";

export const generateSuggestion = async (key: string): Promise<string[]> => {
    const prompt = `List 10 famous Indian foods that start with the letters "${key}". Only return the names in a valid JSON array format, with no extra text or explanation.`;

    try {
        const response = await AI_Model.generateContent(prompt);
        const rawText = await response.response.text();
        const match = rawText.match(/\[.*\]/s);

        if (!match) {
            return [];
        }

        const suggestions = JSON.parse(match[0]);
        return Array.isArray(suggestions) ? suggestions : [];
    } catch (error) {
        console.error("Error generating suggestions:", error);
        return [];
    }
};
