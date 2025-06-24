import { AI_Model } from "../services"

export async function GenrateRecipebyAi(dishname: string, Variant: string, Language: string) {
  console.log(dishname, Variant, Language)
  const prompt = `You are a nutrition expert assistant helping users improve their meals.

🚨 CRITICAL LANGUAGE REQUIREMENT - READ THIS FIRST:
- TARGET LANGUAGE: ${Language}
- You MUST write ALL text content in "${Language}" language ONLY
- NEVER write content in English when the target language is "${Language}"
- JSON structure keys stay in English, but ALL VALUES must be in "${Language}"
- This is MANDATORY and NON-NEGOTIABLE

**INSTRUCTIONS:**
1. Respond ONLY with valid JSON - no markdown, no extra text
2. Keep JSON structure keys in English (like "originalNutrition", "description", etc.)
3. Write ALL content values (descriptions, ingredients, steps, messages) in "${Language}" language
4. Double-check: Is every text value written in "${Language}"? If not, rewrite it.

User Details:
- Dish Name: ${dishname}
- Variant Type: ${Variant}
- Response Language: ${Language}

Required JSON format:
{
"originalNutrition": {
"Calories": [number],
"Protein (g)": [number],
"Iron (mg)": [number],
"Fiber (g)": [number],
"Fat (g)": [number]
},
"healthierVersion": {
"description": "[Write description in ${Language} language]",
"ingredients": ["[ingredient 1 in ${Language}]", "[ingredient 2 in ${Language}]"],
"steps": ["[step 1 in ${Language}]", "[step 2 in ${Language}]"]
},
"nutritionComparison": {
"before": {
"Calories": [number],
"Protein (g)": [number],
"Iron (mg)": [number],
"Fiber (g)": [number],
"Fat (g)": [number]
},
"after": {
"Calories": [number],
"Protein (g)": [number],
"Iron (mg)": [number],
"Fiber (g)": [number],
"Fat (g)": [number]
}
},
"substitutions": [
{
"from": "[original ingredient in ${Language}]",
"to": "[substitute ingredient in ${Language}]",
"why": "[reason in ${Language}]"
}
],
"motivationalMessage": "[Write encouraging message in ${Language}]",
"funFact": "[Write interesting fact in ${Language}]"
}

⚠️ FINAL CHECK: Before responding, verify that ALL text content is written in "${Language}" language, not English!`

  try {
    const response = await AI_Model.generateContent(prompt);

    const rawText = response.response.text() ?? "";

    // Enhanced JSON extraction with multiple fallback patterns
    let cleanedText = rawText.trim();

    // Remove markdown code blocks if present
    const jsonBlockMatch = cleanedText.match(/```(?: json) ?\s * ([\s\S] *?)```/);
    if (jsonBlockMatch) {
      cleanedText = jsonBlockMatch[1].trim();
    }

    // Extract JSON object if wrapped in other text
    const jsonObjectMatch = cleanedText.match(/(\{[\s\S]*\})/);
    if (jsonObjectMatch && !jsonBlockMatch) {
      cleanedText = jsonObjectMatch[1].trim();
    }

    // Parse and validate JSON
    const structured = JSON.parse(cleanedText);

    // Validate required fields
    const requiredFields = [
      'originalNutrition',
      'healthierVersion',
      'nutritionComparison',
      'substitutions',
      'motivationalMessage',
      'funFact'
    ];

    const missingFields = requiredFields.filter(field => !structured[field]);
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')} `);
    }

    if (!structured.healthierVersion.description ||
      !Array.isArray(structured.healthierVersion.ingredients) ||
      !Array.isArray(structured.healthierVersion.steps)) {
      throw new Error("Invalid healthierVersion structure");
    }

    if (!structured.nutritionComparison.before ||
      !structured.nutritionComparison.after) {
      throw new Error("Invalid nutritionComparison structure");
    }
    return structured;

  } catch (err) {
    console.error("JSON parse or data validation error:", err);
    return {
      error: "Invalid or incomplete JSON from AI",
      details: err instanceof Error ? err.message : "Unknown error",
      raw: err
    };
  }
}