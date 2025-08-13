import { buildRecipeFromDish } from "./dish"

function cleanJSON(str: string): string {
  // Remove markdown code blocks
  str = str.replace(/```json\s*/g, '');
  str = str.replace(/```\s*/g, '');

  // Remove any text before the first {
  const firstBrace = str.indexOf('{');
  if (firstBrace !== -1) {
    str = str.substring(firstBrace);
  }

  // Remove any text after the last }
  const lastBrace = str.lastIndexOf('}');
  if (lastBrace !== -1) {
    str = str.substring(0, lastBrace + 1);
  }

  // Remove any trailing commas before closing braces/brackets
  str = str.replace(/,(\s*[}\]])/g, '$1');

  return str.trim();
}

export async function safeParse(content: string) {
  try {
    if (!content || content.trim().length === 0) {
      throw new Error("Empty content received from AI");
    }

    console.log("Raw AI content:", content);
    const cleaned = cleanJSON(content);
    console.log("Cleaned JSON:", cleaned);

    const parsed = JSON.parse(cleaned);
    return parsed;
  } catch (err) {
    console.error("JSON parsing error:", err);
    console.error("Content that failed to parse:", content);
    throw new Error(`Failed to parse AI response as JSON: ${err}`);
  }
}

// Fixed Validation Function
export function validateRecipe(recipe: any): void {
  if (!recipe || typeof recipe !== 'object') {
    throw new Error("Recipe must be a valid object");
  }

  const requiredFields = [
    'healthierVersion',
    'comparison',
    'substitutions',
    'foodHistoryContext',
    'motivationalMessage',
    'funFact',
    'dish'
  ];

  const missing = requiredFields.filter(key => !recipe.hasOwnProperty(key));
  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }


  const healthier = recipe.healthierVersion;
  if (!healthier || typeof healthier !== 'object') {
    throw new Error("healthierVersion must be an object");
  }

  if (!healthier.description || typeof healthier.description !== 'string') {
    throw new Error("healthierVersion.description must be a string");
  }

  if (!Array.isArray(healthier.ingredients) || healthier.ingredients.length === 0) {
    throw new Error("healthierVersion.ingredients must be a non-empty array");
  }

  if (!Array.isArray(healthier.steps) || healthier.steps.length === 0) {
    throw new Error("healthierVersion.steps must be a non-empty array");
  }

  // Validate comparison structure
  const comparison = recipe.comparison;
  if (!comparison || typeof comparison !== 'object') {
    throw new Error("comparison must be an object");
  }

  if (!comparison.before || typeof comparison.before !== 'object') {
    throw new Error("comparison.before must be an object");
  }

  if (!comparison.after || typeof comparison.after !== 'object') {
    throw new Error("comparison.after must be an object");
  }

  // Validate substitutions
  if (!Array.isArray(recipe.substitutions)) {
    throw new Error("substitutions must be an array");
  }

  recipe.substitutions.forEach((sub: any, index: number) => {
    if (!sub || typeof sub !== 'object') {
      throw new Error(`substitutions[${index}] must be an object`);
    }
    if (!sub.from || !sub.to || !sub.why) {
      throw new Error(`substitutions[${index}] must have 'from', 'to', and 'why' properties`);
    }
  });

  console.log("Recipe validation passed successfully");
}
export async function GenerateRecipeByAI(
  dishOrRecipe: string,
  variant: string,
  language: string,
  dishtype: string
) {
  try {
    const result = await buildRecipeFromDish(dishOrRecipe, variant, language, dishtype);
    console.log("Generated Recipe:", result);
    await validateRecipe(result);
    return result;
  } catch (error) {
    console.error("Error in GenerateRecipeByAI:", error);
    throw new Error("Failed to generate recipe. Please check the input or try again later.");
  }
}