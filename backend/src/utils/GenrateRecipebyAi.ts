import { AI_Model } from "../services";
import { groq } from "../services/Groq"
function buildPromptFromRecipeText(
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
- Specifically optimizing for the "${Variant}" dietary approach

**User's Health Goals:** 
- Diet Variant: ${Variant}
- Communication Language: ${Language}
- DishType: ${DishType}

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
6. Recommend trusted Indian brand products where applicable (e.g., Amul Protein Dahi, Tata Sampann Dal)
7. Wherever possible, provide a direct online buying link (Amazon, BigBasket, Blinkit, etc.)
8. Everything should be Indian-friendly and culturally appropriate

**VARIANT-SPECIFIC NUTRITION FOCUS:**
- ALWAYS put the user's selected ${Variant} as the FIRST nutrient in the comparison
- The first key in nutritionComparison should literally be "${Variant}" (e.g., if user selected "High Protein", first key is "High Protein")
- Then add 2-3 supporting nutrients relevant to that variant goal
- EXAMPLES:
  * If ${Variant} = "High Protein": Show "High Protein" first, then "Calories", "Fiber (g)", "Iron (mg)"
  * If ${Variant} = "Low Carb": Show "Low Carb" first, then "Fat (g)", "Protein (g)", "Calories"  
  * If ${Variant} = "Weight Loss": Show "Weight Loss" first, then "Fat (g)", "Fiber (g)", "Protein (g)"
  * If ${Variant} = "Heart Healthy": Show "Heart Healthy" first, then "Sodium (mg)", "Fiber (g)", "Calories"
  * If ${Variant} = "High Fiber": Show "High Fiber" first, then "Calories", "Protein (g)", "Carbohydrates (g)"
- The ${Variant} key should show the main metric that measures success for that variant
- Supporting nutrients should complement and explain the variant improvement
- Avoid duplication - don't repeat the same nutrient type twice

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
    "description": "[Write a warm, encouraging description in ${Language} about how this improved version maintains taste while boosting nutrition and specifically how it aligns with ${Variant} dietary goals]",
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
      "${Variant}": [number - this will be the user's selected variant nutrient FIRST],
      "[Second most relevant nutrient for this variant - avoid duplicating the main ${Variant}]": [number],
      "[Third relevant nutrient - avoid duplicating if already shown]": [number],
      "[Fourth nutrient if applicable and not duplicate]": [number]
    },
    "after": {
      "${Variant}": [number - same nutrient as above, showing improvement],
      "[Same second nutrient as above]": [number], 
      "[Same third nutrient as above]": [number],
      "[Same fourth nutrient as above]": [number]
    },
    "improvements": {
      "${Variant} Improvement": "[Explanation in ${Language} of how the main ${Variant} goal was achieved]",
      "[Secondary improvement if significant]": "[Explanation in ${Language}]",
      "Overall Benefit": "[Summary of how these changes support ${Variant} goals in ${Language}]"
    }
  },
  "substitutions": [
    {
      "from": "[original ingredient in ${Language}]",
      "to": "[substitute ingredient easily available in India in ${Language}]",
      "why": "[Explain in ${Language} how this substitution specifically upgraded the ${Variant} - e.g., 'प्रोटीन 15g बढ़ाया High Protein के लिए', 'कार्ब्स 20g कम किया Low Carb के लिए', '150 कैलोरी घटाई Weight Loss के लिए', 'सोडियम 300mg कम किया Heart Healthy के लिए']"
    }
  ],
  "foodHistoryContext": "[Write about the fascinating history of ingredients used in ${recipeText} in ${Language}. Research and mention the origins of key ingredients - for example: if the dish contains potatoes (came from South America via Portuguese traders in 16th century), tomatoes (brought by Portuguese from Americas), chillies (introduced by Portuguese from Mexico/South America), paneer (techniques from Middle Eastern/Persian influence), onions (came via Central Asian trade routes), garlic (ancient trade from Mediterranean), soya products (Chinese influence), etc. Explain specifically how these ingredients traveled to India through trade, colonization, or cultural exchange. Show how this dish represents this beautiful fusion of global ingredients that became 'Indian' over time. This proves that cuisine evolution is natural and our healthy modifications today continue this ancient tradition and they evolved into that dish. Please make it brief — at least 10 lines.]",
  "motivationalMessage": "[Write encouraging message in ${Language} specifically mentioning how this recipe supports their ${Variant} journey]",
  "funFact": "[Write interesting fact in ${Language} related to the dish or its ingredients]",
  "dish": "[Write dish name as 'Healthy ${Variant} Style' version of the original dish in ${Language}]"
}

⚠️ QUALITY CHECKLIST:
✅ All content in "${Language}" language
✅ Ingredients easily available in Indian markets
✅ Cooking methods suitable for Indian kitchens
✅ Nutritional improvements realistic and significant
✅ Cultural sensitivity maintained
✅ Family-friendly and practical
✅ JSON format perfect with no extra text
✅ Variant-specific optimizations clearly explained
✅ Dynamic improvements based on actual changes made
✅ Substitutions justify the variant benefits`;
}

function buildPrompt(dishname: string, Variant: string, Language: string, DishType: string): string {
  console.log("call build recipe by the")
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
6. Recommend trusted Indian brand products where applicable (e.g., Amul Protein Dahi, Tata Sampann Dal)
7. Wherever possible, provide a direct online buying link (Amazon, BigBasket, Blinkit, etc.)
8. Everything should be Indian-friendly and culturally appropriate

**VARIANT-SPECIFIC OPTIMIZATION:**
- Always optimize the recipe specifically for the "${Variant}" dietary approach
- Focus on the main nutrient/goal of the variant (protein for High Protein, calories for Weight Loss, etc.)
- Make substitutions that directly support the variant goal
- Explain how changes benefit the specific variant chosen

**VARIANT-SPECIFIC NUTRITION FOCUS:**
- ALWAYS put the user's selected ${Variant} as the FIRST nutrient in the comparison
- The first key in nutritionComparison should be relevant to "${Variant}" goal
- Then add 2-3 supporting nutrients relevant to that variant goal
- EXAMPLES:
  * If ${Variant} = "High Protein": Show "Protein (g)" first, then "Calories", "Fiber (g)", "Iron (mg)"
  * If ${Variant} = "Low Carb": Show "Carbohydrates (g)" first, then "Fat (g)", "Protein (g)", "Calories"  
  * If ${Variant} = "Weight Loss": Show "Calories" first, then "Fat (g)", "Fiber (g)", "Protein (g)"
  * If ${Variant} = "Heart Healthy": Show "Sodium (mg)" first, then "Fat (g)", "Fiber (g)", "Calories"
  * If ${Variant} = "High Fiber": Show "Fiber (g)" first, then "Calories", "Protein (g)", "Carbohydrates (g)"
- Avoid duplication - don't repeat the same nutrient type twice
- Only show 3-4 most relevant nutrients, with variant's main focus always first

User Details:
- Dish Name: ${dishname}
- Variant Type: ${Variant}
- Response Language: ${Language}
- DishType: ${DishType}

Required JSON format:
{
  "originalNutrition": {
    "Calories": [estimated number for original recipe],
    "Protein (g)": [estimated grams],
    "Iron (mg)": [estimated mg - important for Indian diets],
    "Fiber (g)": [estimated grams],
    "Fat (g)": [estimated grams]
  },
  "healthierVersion": {
    "description": "[Write a warm, encouraging description in ${Language} about how this improved version maintains taste while boosting nutrition and specifically how it aligns with ${Variant} dietary goals]",
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
      "${Variant}": [number - this will be the user's selected variant nutrient FIRST],
      "[Second most relevant nutrient for this variant - avoid duplicating the main ${Variant}]": [number],
      "[Third relevant nutrient - avoid duplicating if already shown]": [number],
      "[Fourth nutrient if applicable and not duplicate]": [number]
    },
    "after": {
      "${Variant}": [number - same nutrient as above, showing improvement],
      "[Same second nutrient as above]": [number], 
      "[Same third nutrient as above]": [number],
      "[Same fourth nutrient as above]": [number]
    },
    "improvements": {
      "${Variant} Improvement": "[Explanation in ${Language} of how the main ${Variant} goal was achieved]",
      "[Secondary improvement if significant]": "[Explanation in ${Language}]",
      "Overall Benefit": "[Summary of how these changes support ${Variant} goals in ${Language}]"
    }
  },
  "substitutions": [
    {
      "from": "[original ingredient in ${Language}]",
      "to": "[substitute ingredient easily available in India in ${Language}]",
      "why": "[Explain in ${Language} how this substitution specifically upgraded the ${Variant} - e.g., 'प्रोटीन 15g बढ़ाया High Protein के लिए', 'कार्ब्स 20g कम किया Low Carb के लिए', '150 कैलोरी घटाई Weight Loss के लिए', 'सोडियम 300mg कम किया Heart Healthy के लिए']"
    }
  ],
  "foodHistoryContext": "[Write about the fascinating history of ingredients used in ${dishname} in ${Language}. Research and mention the origins of key ingredients - for example: if the dish contains potatoes (came from South America via Portuguese traders in 16th century), tomatoes (brought by Portuguese from Americas), chillies (introduced by Portuguese from Mexico/South America), paneer (techniques from Middle Eastern/Persian influence), onions (came via Central Asian trade routes), garlic (ancient trade from Mediterranean), soya products (Chinese influence), etc. Explain specifically how these ingredients traveled to India through trade, colonization, or cultural exchange. Show how this dish represents this beautiful fusion of global ingredients that became 'Indian' over time. This proves that cuisine evolution is natural and our healthy modifications today continue this ancient tradition and they evolved into that dish. Please make it brief — at least 10 lines.]",
  "motivationalMessage": "[Write encouraging message in ${Language} specifically mentioning how this recipe supports their ${Variant} journey]",
  "funFact": "[Write interesting fact in ${Language} related to the dish or its ingredients]",
  "dish": "[Write dish name as 'Healthy ${Variant} Style' version of the original dish in ${Language}]"
}


⚠️ FINAL CHECK:
✅ All text content is in "${Language}" language (not English)
✅ JSON structure is valid and complete
✅ All properties are included and properly formatted
✅ Ingredients are Indian-market friendly
✅ Cooking methods are traditional Indian style
✅ No markdown formatting or extra text outside JSON
✅ Nutrition values are realistic numbers
✅ Variant-specific optimizations clearly explained
✅ Dynamic nutrition comparison based on variant
✅ Substitutions explain variant benefits

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
  dishOrRecipe: string,
  Variant: string,
  Language: string,
  type: string,
  dishtype: string
) {
  let prompt
  if (type === "dish") {
    prompt = buildPrompt(dishOrRecipe, Variant, Language, dishtype);
  }
  else {
    prompt = buildPromptFromRecipeText(dishOrRecipe, Variant, Language, dishtype)
  }

  try {
    const AIresponse = await AI_Model.generateContent(prompt);
    const rawText = AIresponse.response.text() || "";
    const parsed = extractAndParseJSON(rawText);
    validateRecipe(parsed);
    return parsed;

  } catch (geminiError) {
    console.log("Gemini failed, falling back to Groq...", geminiError);

    try {
      const groqResponse = await groq.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "llama-3.1-8b-instant"
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
