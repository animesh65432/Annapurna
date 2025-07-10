import { AI_Model } from "../services";
import { groq } from "../services/Groq"


function buildPrompt(Calories: string, Cabs: string, dishname: string, Variant: string, Language: string): string {
  return `You are a nutrition expert assistant helping users improve their meals.

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
5. 🇮🇳 INGREDIENT RULES:
- Use Indian-market-friendly ingredients (paneer, soya chunks, moong dal, atta, ghee, etc.)
- AVOID imported/inaccessible items (broccoli, olive oil, tofu, etc.)
6. Everything should be Indian friendly

User Details:
- Dish Name: ${dishname}
- Variant Type: ${Variant}
- Calories Type: ${Calories}
- Cabs Type: ${Cabs}
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
"steps": [
  "[Start with detailed prep work in ${Language}]",
  "[Describe next step clearly in ${Language}]",
  "...",
  "[Make sure there are at least 5-7 well-written, complete steps in ${Language}]",
  "[Each step should be complete, not too short — how to cook it]"
]
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
"foodHistoryContext": "[Write about the fascinating history of ingredients used in ${dishname} in ${Language}. Research and mention the origins of key ingredients - for example: if the dish contains potatoes (came from South America via Portuguese traders in 16th century), tomatoes (brought by Portuguese from Americas), chillies (introduced by Portuguese from Mexico/South America), paneer (techniques from Middle Eastern/Persian influence), onions (came via Central Asian trade routes), garlic (ancient trade from Mediterranean), soya products (Chinese influence), etc. Explain specifically how these ingredients traveled to India through trade, colonization, or cultural exchange. Show how ${dishname} itself represents this beautiful fusion of global ingredients that became 'Indian' over time. This proves that cuisine evolution is natural and our healthy modifications today continue this ancient tradition and they evolved into that dish. Please make brief — at least 10 lines.]",
"motivationalMessage": "[Write encouraging message in ${Language}]",
"funFact": "[Write interesting fact in ${Language}]",
"dish": "[Write dish name as Healthy ${dishname} in ${Language}]"
}

⚠️ FINAL CHECK: Before responding, verify that ALL text content is written in "${Language}" language, not English! And please create all the things I mention and don't miss any properties.`;
}

function extractAndParseJSON(rawText: string): any {
  let cleanedText = rawText.trim();

  const jsonBlockMatch = cleanedText.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonBlockMatch) {
    cleanedText = jsonBlockMatch[1].trim();
  }

  const jsonObjectMatch = cleanedText.match(/(\{[\s\S]*\})/);
  if (jsonObjectMatch && !jsonBlockMatch) {
    cleanedText = jsonObjectMatch[1].trim();
  }

  return JSON.parse(cleanedText);
}

function validateRecipe(recipe: any): void {
  const requiredFields = [
    'originalNutrition',
    'healthierVersion',
    'nutritionComparison',
    'substitutions',
    'foodHistoryContext',
    'motivationalMessage',
    'funFact',
    'dish'
  ];

  const missing = requiredFields.filter(key => !recipe[key]);
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  if (!recipe.healthierVersion.description ||
    !Array.isArray(recipe.healthierVersion.ingredients) ||
    !Array.isArray(recipe.healthierVersion.steps)) {
    throw new Error("Invalid healthierVersion structure");
  }

  if (!recipe.nutritionComparison.before || !recipe.nutritionComparison.after) {
    throw new Error("Invalid nutritionComparison structure");
  }
}

export async function GenrateRecipebyAi(
  Calories: string,
  Cabs: string,
  dishname: string,
  Variant: string,
  Language: string
) {
  const prompt = buildPrompt(Calories, Cabs, dishname, Variant, Language);

  try {
    const AIresponse = await AI_Model.generateContent(prompt);
    const rawText = AIresponse.response.text() || "";
    const parsed = extractAndParseJSON(rawText);
    validateRecipe(parsed);
    return parsed;

  } catch (geminiError) {
    console.warn("Gemini failed, falling back to Groq...", geminiError);

    try {
      const groqResponse = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.3-70b-versatile"
      });

      const groqText = groqResponse.choices?.[0]?.message?.content || "";
      const parsed = extractAndParseJSON(groqText);
      validateRecipe(parsed);
      return parsed;

    } catch (groqError) {
      console.error("Both Gemini and Groq failed:", groqError);
      return {
        message: "sorry ai limit got overload",
        details: groqError instanceof Error ? groqError.message : "Unknown error",
        raw: groqError
      };
    }
  }
}
