import { groq } from "../services/Groq"

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
"steps": [
  "[Step 1: Start with detailed prep work in ${Language}]",
  "[Step 2: Describe next step clearly in ${Language}]",
  "...", 
  "[Make sure there are at least 5-7 well-written, complete steps in ${Language}]",
  "[Each step should be complete, not too short —  how to cook it]"
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
"foodHistoryContext": "[Write about the fascinating history of ingredients used in ${dishname} in ${Language}. Research and mention the origins of key ingredients - for example: if the dish contains potatoes (came from South America via Portuguese traders in 16th century), tomatoes (brought by Portuguese from Americas), chillies (introduced by Portuguese from Mexico/South America), paneer (techniques from Middle Eastern/Persian influence), onions (came via Central Asian trade routes), garlic (ancient trade from Mediterranean), soya products (Chinese influence), etc. Explain specifically how these ingredients traveled to India through trade, colonization, or cultural exchange. Show how ${dishname} itself represents this beautiful fusion of global ingredients that became 'Indian' over time. This proves that cuisine evolution is natural and our healthy modifications today continue this ancient tradition and they evoled into that dish please make breif alteast 10 lines.]",
"motivationalMessage": "[Write encouraging message in ${Language}]",
"funFact": "[Write interesting fact in ${Language}]",
"dish":"[Write dish name is ${dishname}-${Variant} in ${Language}]"
}

⚠️ FINAL CHECK: Before responding, verify that ALL text content is written in "${Language}" language, not English! and please create all the thing i mention and don't miss any proproties`

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

    // Enhanced JSON extraction with multiple fallback patterns
    let cleanedText = rawText.trim();

    // Remove markdown code blocks if present
    const jsonBlockMatch = cleanedText.match(/```(?:json)?\s*([\s\S]*?)```/);
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
      'foodHistoryContext',
      'motivationalMessage',
      'funFact'
    ];

    const missingFields = requiredFields.filter(field => !structured[field]);
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
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