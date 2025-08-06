import { buildrecipefromdish } from "./dish"
import { jsonrepair } from "jsonrepair";


export async function safeParse(label: string, raw: string) {
  try {
    console.log(raw)
    const cleaned = raw.replace(/^```(?:json)?|```$/g, "").trim();
    const repaired = jsonrepair(cleaned);
    return JSON.parse(repaired);
  } catch (err) {
    console.log(raw)
    console.error(`${label} - Failed to parse:\n`, raw);
    throw new Error(`${label} content could not be parsed`);
  }
}


export function extractAndParseJSON(rawText: string): any {
  let cleanedText = rawText.trim();

  // Try to extract JSON within triple-backtick
  const backtickBlock = cleanedText.match(/```(?:json)?\s*([\s\S]*?)```/);
  if (backtickBlock) {
    cleanedText = backtickBlock[1].trim();
  }

  // Fallback: Extract the first valid-looking JSON object
  const firstBrace = cleanedText.indexOf("{");
  const lastBrace = cleanedText.lastIndexOf("}");

  if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
    throw new Error("No valid JSON object found");
  }

  const jsonCandidate = cleanedText.slice(firstBrace, lastBrace + 1);

  return JSON.parse(jsonCandidate);
}


function validateRecipe(recipe: any): void {
  const requiredFields = [
    'healthierVersion',
    'comparison',
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

  const comparison = recipe.comparison;
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
