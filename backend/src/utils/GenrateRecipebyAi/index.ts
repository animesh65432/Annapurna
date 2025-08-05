import { buildrecipefromdish } from "./dish"


export async function safeParse(label: string, raw: string) {
  try {
    return await extractAndParseJSON(raw);
  } catch (err) {
    console.error(`❌ Failed to parse ${label}:`, raw);
    console.error("🔍 JSON parse error:", err); // <== Add this
    throw new Error(`${label} content could not be parsed`);
  }
}



export function extractAndParseJSON(rawText: string): any {
  let cleanedText = rawText.trim();

  // Prefer extracting a JSON block from within triple-backtick markdown
  const jsonBlockMatch = cleanedText.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (jsonBlockMatch) {
    cleanedText = jsonBlockMatch[1].trim();
  }

  // If no backtick block found, try to extract a raw JSON object from anywhere
  const jsonObjectMatch = cleanedText.match(/\{[\s\S]*\}/);
  if (jsonObjectMatch) {
    cleanedText = jsonObjectMatch[0].trim();
  }

  // Remove leading/trailing text that GPT might accidentally include
  // (like "Here is your JSON:" or extra whitespace or newlines)
  cleanedText = cleanedText.replace(/^[^{]*?(\{[\s\S]*\})[^}]*?$/, "$1");

  return JSON.parse(cleanedText);
}

function validateRecipe(recipe: any): void {
  const requiredFields = [
    'healthierVersion',
    'Comparison',
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

  const healthier = recipe.healthierVersion;
  if (!healthier.description ||
    !Array.isArray(healthier.ingredients) ||
    !Array.isArray(healthier.steps)) {
    throw new Error("Invalid healthierVersion structure");
  }

  const comparison = recipe.Comparison;
  if (!comparison.before || !comparison.after) {
    throw new Error("Invalid comparison structure");
  }
}

// Nutrients, dish, variant, language
export async function GenrateRecipebyAi(
  dishOrRecipe: string,
  Variant: string,
  Language: string,
  dishtype: string
) {
  try {
    const result = await buildrecipefromdish(dishOrRecipe, Variant, Language, dishtype);
    console.log("Generated Recipe:", result);
    await validateRecipe(result)
    return result
  }
  catch (error) {
    console.error(error);
    throw new Error("Failed to generate recipe. Please check the input or try again later.");
  }
}
