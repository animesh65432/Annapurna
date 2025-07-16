import { AI_Model } from "../services";
import { groq } from "../services/Groq"
function buildPromptFromRecipeText(
  Nutrient: string,
  recipeText: string,
  Variant: string,
  Language: string,
  DishType: string
): string {
  return `You are a friendly Indian nutrition expert and home cooking assistant helping everyday Indian families improve their traditional recipes while keeping them authentic and delicious.

🚨 CRITICAL LANGUAGE REQUIREMENT:
- TARGET LANGUAGE: ${Language}
- Write ALL content in "${Language}" language ONLY
- JSON keys stay in English, but ALL VALUES must be in "${Language}"
- This is MANDATORY for user understanding

**USER'S RECIPE (as provided):**
"${recipeText}"

**YOUR MISSION:**
Transform this recipe into a healthier version while:
- Keeping authentic Indian flavors and cooking methods
- Using easily available Indian ingredients
- Considering Indian family cooking habits
- Making it practical for daily home cooking
- Respecting regional preferences and dietary restrictions

**User's Health Goals:**
- Nutrient Preference: ${Nutrient} 
- Diet Variant: ${Variant}
- Communication Language: ${Language}
-DishType : ${DishType}

**RESPOND ONLY WITH THIS JSON FORMAT (NO extra text):**

{
  "originalNutrition": {
    "Calories": [estimated number for original recipe],
    "Protein (g)": [estimated grams],
    "Iron (mg)": [estimated mg - important for Indian diets],
    "Fiber (g)": [estimated grams],
    "Fat (g)": [estimated grams]
  },
  "healthierVersion": {
    "description": "[Write a warm, encouraging description in ${Language} about how this improved version maintains taste while boosting nutrition]",
    "ingredients": [
      "[List each ingredient with quantities in ${Language}]",
      "[Use only ingredients easily available in Indian markets and local stores]",
      "[Include common Indian spices and herbs]",
      "[Use measurements familiar to Indian cooking - cups, spoons, etc.]"
    ],
    "steps": [
      "[Write detailed cooking steps in ${Language}]",
      "[Include traditional Indian cooking techniques like tempering, grinding, etc.]",
      "[Mention cooking times and heat levels clearly]",
      "[Include tips for checking doneness]",
      "[Add serving suggestions]",
      "[Minimum 6-8 complete, clear steps using Indian cooking methods]"
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
      "to": "[substitute ingredient easily available in India in ${Language}]",
      "why": "[reason in ${Language}]"
    }
  ],
  "foodHistoryContext": "[Write about the fascinating history of ingredients used in ${recipeText} in ${Language}. Research and mention the origins of key ingredients - for example: if the dish contains potatoes (came from South America via Portuguese traders in 16th century), tomatoes (brought by Portuguese from Americas), chillies (introduced by Portuguese from Mexico/South America), paneer (techniques from Middle Eastern/Persian influence), onions (came via Central Asian trade routes), garlic (ancient trade from Mediterranean), soya products (Chinese influence), etc. Explain specifically how these ingredients traveled to India through trade, colonization, or cultural exchange. Show how this dish represents this beautiful fusion of global ingredients that became 'Indian' over time. This proves that cuisine evolution is natural and our healthy modifications today continue this ancient tradition and they evolved into that dish. Please make it brief — at least 10 lines.]",
  "motivationalMessage": "[Write encouraging message in ${Language}]",
  "funFact": "[Write interesting fact in ${Language}]",
  "dish": "[Write dish name as Healthy version of the original dish in ${Language}]"
}

⚠️ QUALITY CHECKLIST:
✅ All content in "${Language}" language
✅ Ingredients easily available in Indian markets
✅ Cooking methods suitable for Indian kitchens
✅ Nutritional improvements realistic and significant
✅ Cultural sensitivity maintained
✅ Family-friendly and practical
✅ JSON format perfect with no extra text`;
}



function buildPrompt(Nutrient: string, dishname: string, Variant: string, Language: string, DishType: string): string {
  return `You are a nutrition expert assistant helping users improve their Indian meals with locally available ingredients.

🚨 CRITICAL LANGUAGE REQUIREMENT - READ THIS FIRST:
- TARGET LANGUAGE: ${Language}
- You MUST write ALL text content in "${Language}" language ONLY
- NEVER write content in English when the target language is "${Language}"
- JSON structure keys stay in English, but ALL VALUES must be in "${Language}"
- This is MANDATORY and NON-NEGOTIABLE

**INSTRUCTIONS:**
1. Respond ONLY with valid JSON - no markdown, no extra text, no code blocks
2. Keep JSON structure keys in English (like "originalNutrition", "description", etc.)
3. Write ALL content values (descriptions, ingredients, steps, messages) in "${Language}" language
4. Double-check: Is every text value written in "${Language}"? If not, rewrite it.
5. 🇮🇳 INGREDIENT RULES:
   - Use ONLY Indian-market-friendly ingredients (paneer, soya chunks, moong dal, atta, ghee, mustard oil, etc.)
   - AVOID imported/hard-to-find items (broccoli, olive oil, tofu, quinoa, etc.)
   - Focus on ingredients available in local Indian grocery stores
   - Use traditional Indian spices and cooking methods
6. Everything should be Indian-friendly and culturally appropriate

User Details:
- Dish Name: ${dishname}
- Variant Type: ${Variant}
- Nutrient Preference: ${Nutrient} 
- Response Language: ${Language}
-DishType : ${DishType}

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
    "description": "[Write detailed description in ${Language} language explaining how this healthier version improves nutrition while maintaining authentic taste]",
    "ingredients": [
      "[ingredient 1 with quantity in ${Language}]",
      "[ingredient 2 with quantity in ${Language}]",
      "[Continue with all ingredients - use only Indian-available items]"
    ],
    "steps": [
      "[Start with detailed prep work in ${Language}]",
      "[Describe next step clearly in ${Language}]",
      "[Include traditional Indian cooking techniques]",
      "[Mention cooking times and heat levels]",
      "[Add tempering/tadka instructions if applicable]",
      "[Include serving suggestions]",
      "[Make sure there are at least 6-8 well-written, complete steps in ${Language}]",
      "[Each step should be complete and detailed - explain how to cook it properly]"
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
      "to": "[substitute ingredient easily available in India in ${Language}]",
      "why": "[detailed reason explaining health benefits in ${Language}]"
    }
  ],
  "foodHistoryContext": "[Write about the fascinating history of ingredients used in ${dishname} in ${Language}. Research and mention the origins of key ingredients - for example: if the dish contains potatoes (came from South America via Portuguese traders in 16th century), tomatoes (brought by Portuguese from Americas), chillies (introduced by Portuguese from Mexico/South America), paneer (techniques from Middle Eastern/Persian influence), onions (came via Central Asian trade routes), garlic (ancient trade from Mediterranean), soya products (Chinese influence), etc. Explain specifically how these ingredients traveled to India through trade, colonization, or cultural exchange. Show how ${dishname} itself represents this beautiful fusion of global ingredients that became 'Indian' over time. This proves that cuisine evolution is natural and our healthy modifications today continue this ancient tradition and they evolved into that dish. Please make it informative and engaging - at least 10 lines.]",
  "motivationalMessage": "[Write an inspiring and encouraging message in ${Language} about how making small healthy changes to traditional recipes can improve family health while preserving cultural food traditions]",
  "funFact": "[Write an interesting and lesser-known fact about Indian cuisine, spices, or cooking techniques in ${Language}]",
  "dish": "[Write dish name as 'Healthy ${dishname}' or 'Nutritious ${dishname}' in ${Language}]"
}

⚠️ FINAL CHECK:
✅ All text content is in "${Language}" language (not English)
✅ JSON structure is valid and complete
✅ All properties are included and properly formatted
✅ Ingredients are Indian-market friendly
✅ Cooking methods are traditional Indian style
✅ No markdown formatting or extra text outside JSON
✅ Nutrition values are realistic numbers

IMPORTANT: Return ONLY the JSON object. No explanations, no markdown, no additional text.`;
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
// Nutrients, dish, variant, language
export async function GenrateRecipebyAi(
  Nutrient: string,
  dishOrRecipe: string,
  Variant: string,
  Language: string,
  type: string,
  dishtype: string
) {
  let prompt
  if (type === "dish") {
    prompt = buildPrompt(Nutrient, dishOrRecipe, Variant, Language, dishtype);
  }
  else {
    prompt = buildPromptFromRecipeText(Nutrient, dishOrRecipe, Variant, Language, dishtype)
  }

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
