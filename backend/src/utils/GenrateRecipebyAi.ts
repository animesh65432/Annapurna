import { AI_Model } from "../services";

export async function GenrateRecipebyAi(dishname: string, Variant: string, Language: string) {
    const prompt = `You are a nutrition expert assistant helping Indian users improve their meals.

A user has provided the following details:
- Dish Name: ${dishname}
- Variant Type: ${Variant}
- Language: ${Language}

Please respond in the following JSON format **only**:

{
  "originalNutrition": {
    "Calories": number,
    "Protein (g)": number,
    "Iron (mg)": number,
    "Fiber (g)": number,
    "Fat (g)": number
  },
  "healthierVersion": {
    "description": string,
    "ingredients": string[],
    "steps": string[]
  },
  "nutritionComparison": {
    "before": {
      "Calories": number,
      "Protein (g)": number,
      "Iron (mg)": number,
      "Fiber (g)": number,
      "Fat (g)": number
    },
    "after": {
      "Calories": number,
      "Protein (g)": number,
      "Iron (mg)": number,
      "Fiber (g)": number,
      "Fat (g)": number
    }
  },
  "substitutions": [
    {
      "from": string,
      "to": string,
      "why": string
    }
  ],
  "motivationalMessage": string,
  "funFact": string
}

Tasks:
1. Show the **original nutrition per serving** of the dish.
2. Suggest a healthier version of this dish that aligns with the user's goal (e.g. High Protein).
3. Provide a **Before vs After nutrition table** comparing the original and the healthy version.
4. List the **ingredient substitutions** made.
5. Explain **why** each substitution helps improve the health goal, especially for Indian diets.
6. Add a short, **motivational message** in the user's selected language encouraging them to try the healthier version.
7. Include a **fun fact about Indian food evolution** to inspire flexibility (e.g., how chillies and tomatoes were adopted).

Use only widely available Indian ingredients. Keep the tone helpful, respectful, and friendly. Output strictly in valid JSON format.`;

    const response = await AI_Model.generateContent(prompt);
    const rawText = await response.response.text();

    const cleanedText = rawText.replace(/```json|```/g, '').trim();

    try {
        const structured = JSON.parse(cleanedText);
        console.log("Structured AI Output:", structured);
        return structured;
    } catch (err) {
        console.error("JSON parse error:", err);
        console.log("Raw AI response:", rawText);
        return { error: "Invalid JSON structure from AI" };
    }
}
