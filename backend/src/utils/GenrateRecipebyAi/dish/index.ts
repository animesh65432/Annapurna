import { Gemini_AI_Model_Option_1 } from "../../../services/GemaniAi/optionone";
import { Gemini_AI_Model_Option_2 } from "../../../services/GemaniAi/optiontwo";
import { Gemini_AI_Model_Option_3 } from "../../../services/GemaniAi/optionthree"
import { groq } from "../../../services/Groq";
import { safeParse } from "../index"

export function buildPromptdish1(dishOrRecipe: string, Variant: string, Language: string, dishtype: string) {
  return `You are an expert Indian recipe developer and nutritionist specializing in creating healthier versions of traditional dishes while preserving authentic flavors and taste.

The dish or recipe name is: ${dishOrRecipe}.
The variant is: ${Variant}.
The language is: ${Language}.
The dish type is: ${dishtype}.

Create a detailed healthier recipe following the exact structure below:

CRITICAL JSON FORMATTING INSTRUCTIONS:
- Your response must be ONLY valid JSON - no text before or after
- Start with { and end with }
- Use double quotes for all strings, never single quotes
- No trailing commas after the last item in objects or arrays
- Escape quotes inside strings with \"
- Test your JSON structure before responding
- No line breaks inside string values
- Ensure all brackets and braces match perfectly
-and anything else that is not in the below structure should not be included

{
  "healthierVersion": {
    "description": "[Write 3-4 sentences in ${Language} about this healthier version]",
    "ingredients": [
      "[Ingredient 1 with quantity]",
      "[Ingredient 2 with quantity]",
      "[Continue to list all ingredients with quantities]",
    ],
    "steps": [
      "[Detailed step 1]",
      "[Detailed step 2]", 
      "[Continue to list all steps in order]",
    ]
  }
}
  `;
}

export function buildPromptdish2(dishOrRecipe: string, Variant: string, Language: string, dishtype: string, recipe: string) {
  return `{
  You are an expert nutritionist and Indian cuisine analyst with deep knowledge of traditional recipes and their nutritional profiles.

The dish or recipe name is: ${dishOrRecipe}.
The variant is: ${Variant}.
The language is: ${Language}.
The dish type is: ${dishtype}.
The reference recipe is: ${recipe}.

Analyze the provided recipe and create an accurate nutritional comparison following the exact structure below:

CRITICAL INSTRUCTIONS:
- Return ONLY the JSON object below
- Do NOT include any text before or after the JSON
- Do NOT use markdown formatting or code blocks
- Do NOT add explanations, comments, or additional text
- Ensure all quotes are properly escaped
- End your response immediately after the closing brace
- Use camelCase for all keys (no spaces or hyphens)

REQUIRED JSON STRUCTURE:
{
  "Comparison": {
    "before": {
      // Dynamic key-value pairs based on the specific dish
      // Keys should be relevant to the dish type (e.g., for parathas: doughComposition, fillingComposition)
      // Keys should be in camelCase format
      // Include 6-9 relevant aspects that differentiate traditional vs healthier version
    },
    "after": {
      // Same keys as "before" but showing the healthier modifications
      // Detailed descriptions of improvements made
    }
  }
}
IMPORTANT: Your response must start with { and end with }. Nothing else."
}

`;
}
export function buildPromptdish3(dishOrRecipe: string, Variant: string, Language: string, dishtype: string, recipe: string) {
  return `You are an expert Indian cuisine analyst specializing in identifying and explaining ingredient substitutions for healthier cooking while maintaining authentic flavors.

The dish or recipe name is: ${dishOrRecipe}.
The variant is: ${Variant}.
The language is: ${Language}.
The dish type is: ${dishtype}.
The reference recipe is: ${recipe}.

Analyze the provided recipe and create detailed substitution recommendations following the exact structure below:

CRITICAL INSTRUCTIONS:
- Return ONLY the JSON object below
- Do NOT include any text before or after the JSON
- Do NOT use markdown formatting or code blocks
- Do NOT add explanations, comments, or additional text
- Ensure all quotes are properly escaped
- End your response immediately after the closing brace
- Include 3-8 substitutions in the array

{
  "substitutions": [
    {
      "from": "[Original ingredient used in traditional ${dishOrRecipe} recipe]",
      "to": "[Healthier substitute ingredient that aligns with ${Variant} goals]",
      "why": "[Explain in ${Language} why this substitution works - include health benefits, taste impact, and how it maintains authenticity]"
    }
  ]
}

Guidelines:
- Only include substitutions that actually improve the recipe for ${Variant} dietary goals
- Each substitution must maintain or enhance the authentic taste of ${dishOrRecipe}
- Explain both health benefits and flavor impact for each substitution
- Use ingredients easily available in Indian markets and stores
- Ensure substitutions are practical and cost-effective for home cooking
- Focus on substitutions that make the biggest impact on health without compromising taste
- Write explanations in clear, conversational ${Language}
- Consider traditional Indian cooking methods when suggesting substitutions
`;
}

export function buildPromptdish4(dishOrRecipe: string, Variant: string, Language: string, dishtype: string) {
  return `You are an expert Indian food historian and motivational wellness coach with deep knowledge of traditional dishes, their cultural significance, and inspiring healthy cooking approaches.

The dish or recipe name is: ${dishOrRecipe}.
The variant is: ${Variant}.
The language is: ${Language}.
The dish type is: ${dishtype}.

Create an inspiring and informative context following the exact structure below:

CRITICAL INSTRUCTIONS:
- Return ONLY the JSON object below
- Do NOT include any text before or after the JSON
- Do NOT use markdown formatting or code blocks
- Do NOT add explanations, comments, or additional text
- Ensure all quotes are properly escaped
- End your response immediately after the closing brace
- All property names must be in double quotes

{
  "dish": "[Write the name of the dish with the ${Variant} specification - e.g., 'Healthy Butter Chicken (Low-Fat Version)' in ${Language}]",
  "motivationalMessage": "[Write an inspiring 2-3 sentence message in ${Language} that motivates people to try this healthier version. Focus on how they can enjoy their favorite ${dishOrRecipe} while taking care of their health and achieving their ${Variant} goals. Make it warm, encouraging, and positive.]",
  "foodHistoryContext": "[Write a brief but engaging paragraph in ${Language} about the origins and cultural significance of ${dishOrRecipe}. Include its regional roots, traditional preparation methods, cultural importance, and how it has evolved over time. Make it interesting and informative while respecting the dish's heritage.]",
  "funFact": "[Write a fun fact in ${Language} about the dish or its ingredients that adds cultural richness and engages the reader.]"
}

Guidelines:
- Write in warm, encouraging, and culturally respectful ${Language}
- Make the motivational message personally inspiring and achievable
- Include accurate historical and cultural information about ${dishOrRecipe}
- Connect the traditional heritage with modern healthy cooking approaches
- Ensure the content is authentic and celebrates Indian culinary traditions
- Make the food history engaging and informative without being too lengthy
- Focus on positive aspects of both tradition and health improvements
- Write in a tone that makes people excited to cook and eat healthier
`;
}

export function buildCombinedRecipePrompt(dishOrRecipe: string, Variant: string, Language: string, dishtype: string) {
  return `You are an expert Indian recipe developer, nutritionist, food historian, and wellness coach specializing in creating healthier versions of traditional dishes while preserving authentic flavors and cultural heritage.

The dish or recipe name is: ${dishOrRecipe}.
The variant is: ${Variant}.
The language is: ${Language}.
The dish type is: ${dishtype}.

Create a comprehensive analysis and healthier recipe following the exact structure below:

CRITICAL JSON FORMATTING INSTRUCTIONS:
- Your response must be ONLY valid JSON - no text before or after
- Start with { and end with }
- Use double quotes for all strings, never single quotes
- No trailing commas after the last item in objects or arrays
- Escape quotes inside strings with \"
- Test your JSON structure before responding
- No line breaks inside string values
- Ensure all brackets and braces match perfectly
- Use camelCase for all keys (no spaces or hyphens)
- All property names must be in double quotes

{
  "dish": "[Write the name of the dish with the ${Variant} specification - e.g., 'Healthy Butter Chicken (Low-Fat Version)' in ${Language}]",
  "motivationalMessage": "[Write an inspiring 2-3 sentence message in ${Language} that motivates people to try this healthier version. Focus on how they can enjoy their favorite ${dishOrRecipe} while taking care of their health and achieving their ${Variant} goals. Make it warm, encouraging, and positive.]",
  "foodHistoryContext": "[Write a brief but engaging paragraph in ${Language} about the origins and cultural significance of ${dishOrRecipe}. Include its regional roots, traditional preparation methods, cultural importance, and how it has evolved over time. Make it interesting and informative while respecting the dish's heritage.]",
  "funFact": "[Write a fun fact in ${Language} about the dish or its ingredients that adds cultural richness and engages the reader.]",
  "healthierVersion": {
    "description": "[Write 3-4 sentences in ${Language} about this healthier version]",
    "ingredients": [
      "[Ingredient 1 with quantity]",
      "[Ingredient 2 with quantity]",
      "[Continue to list all ingredients with quantities]"
    ],
    "steps": [
      "[Detailed step 1]",
      "[Detailed step 2]", 
      "[Continue to list all steps in order]"
    ]
  },
  "comparison": {
    "before": {
      // Dynamic key-value pairs based on the specific dish
      // Keys should be relevant to the dish type (e.g., for parathas: doughComposition, fillingComposition)
      // Keys should be in camelCase format
      // Include 6-9 relevant aspects that differentiate traditional vs healthier version
    },
    "after": {
      // Same keys as "before" but showing the healthier modifications
      // Detailed descriptions of improvements made
    }
  },
  "substitutions": [
    {
      "from": "[Original ingredient used in traditional ${dishOrRecipe} recipe]",
      "to": "[Healthier substitute ingredient that aligns with ${Variant} goals]",
      "why": "[Explain in ${Language} why this substitution works - include health benefits, taste impact, and how it maintains authenticity]"
    }
  ]
}

Guidelines:
- Write in warm, encouraging, and culturally respectful ${Language}
- Make the motivational message personally inspiring and achievable
- Include accurate historical and cultural information about ${dishOrRecipe}
- Connect traditional heritage with modern healthy cooking approaches
- Ensure content is authentic and celebrates Indian culinary traditions
- Only include substitutions that actually improve the recipe for ${Variant} dietary goals
- Each substitution must maintain or enhance the authentic taste of ${dishOrRecipe}
- Explain both health benefits and flavor impact for each substitution
- Use ingredients easily available in Indian markets and stores
- Ensure substitutions are practical and cost-effective for home cooking
- Focus on substitutions that make the biggest impact on health without compromising taste
- Include 3-8 substitutions in the array
- For comparison section, use dynamic keys relevant to the specific dish type
- Include 6-9 relevant aspects in the comparison that differentiate traditional vs healthier version
- Make the food history engaging and informative without being too lengthy
- Focus on positive aspects of both tradition and health improvements
- Write in a tone that makes people excited to cook and eat healthier
- Preserve authentic flavors and taste while creating healthier alternatives`;
}

export async function AI_Model_generateContentFordish1(dish: string, Variant: string, Language: string, dishtype: string): Promise<string> {
  const prompt = buildCombinedRecipePrompt(dish, Variant, Language, dishtype);
  try {

    const AIresponse = await Gemini_AI_Model_Option_3.generateContent(prompt);
    const rawText = AIresponse.response.text()
    return `${rawText}`;

  } catch (geminiError) {
    console.log("Gemini option 3 failed", geminiError);

    try {
      const AIresponse = await Gemini_AI_Model_Option_1.generateContent(prompt);
      const rawText = AIresponse.response.text()
      return `${rawText}`;
    } catch (error) {
      console.log("Gemini option 1 failed", error);

      try {
        const AIresponse = await Gemini_AI_Model_Option_3.generateContent(prompt);
        const rawText = AIresponse.response.text()
        return `${rawText}`;
      } catch (error) {
        console.log("Gemini option 3 failed back to groq", error);
        try {
          const groqResponse = await groq.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "llama-3.1-8b-instant"
          });

          const groqText = groqResponse.choices?.[0]?.message?.content
          return `${groqText}`;

        } catch (groqError) {
          console.log("Both Gemini and Groq failed:", groqError);
          return "Error generating content";
        }
      }
    }

  }

}
export async function AI_Model_generateContentFordish2(dish: string, Variant: string, Language: string, dishtype: string, recipe: any): Promise<string> {
  const prompt = buildPromptdish2(dish, Variant, Language, dishtype, recipe);
  try {
    const AIresponse = await Gemini_AI_Model_Option_3.generateContent(prompt);
    const rawText = AIresponse.response.text()
    return `${rawText}`;

  } catch (geminiError) {
    console.log("Gemini option 1 failed", geminiError);

    try {
      const AIresponse = await Gemini_AI_Model_Option_2.generateContent(prompt);
      const rawText = AIresponse.response.text()
      return `${rawText}`;
    } catch (error) {
      console.log("Gemini option 2 failed", error);

      try {
        const AIresponse = await Gemini_AI_Model_Option_1.generateContent(prompt);
        const rawText = AIresponse.response.text()
        return `${rawText}`;
      } catch (error) {
        console.log("Gemini option 3 failed back to groq", error);
        try {
          const groqResponse = await groq.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "llama-3.1-8b-instant"
          });

          const groqText = groqResponse.choices?.[0]?.message?.content
          return `${groqText}`;

        } catch (groqError) {
          console.log("Both Gemini and Groq failed:", groqError);
          return "Error generating content";
        }
      }
    }

  }

}

export async function AI_Model_generateContentFordish3(dish: string, Variant: string, Language: string, dishtype: string, recipe: string): Promise<string> {
  const prompt = buildPromptdish3(dish, Variant, Language, dishtype, recipe);
  try {

    const AIresponse = await Gemini_AI_Model_Option_2.generateContent(prompt);
    const rawText = AIresponse.response.text()
    return `${rawText}`;

  } catch (geminiError) {
    console.log("Gemini option 1 failed", geminiError);

    try {
      const AIresponse = await Gemini_AI_Model_Option_1.generateContent(prompt);
      const rawText = AIresponse.response.text()
      return `${rawText}`;
    } catch (error) {
      console.log("Gemini option 2 failed", error);

      try {
        const AIresponse = await Gemini_AI_Model_Option_3.generateContent(prompt);
        const rawText = AIresponse.response.text()
        return `${rawText}`;
      } catch (error) {
        console.log("Gemini option 3 failed back to groq", error);
        try {
          const groqResponse = await groq.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "llama-3.1-8b-instant"
          });

          const groqText = groqResponse.choices?.[0]?.message?.content
          return `${groqText}`;

        } catch (groqError) {
          console.log("Both Gemini and Groq failed:", groqError);
          return "Error generating content";
        }
      }
    }

  }

}
export async function AI_Model_generateContentFordish4(dish: string, Variant: string, Language: string, dishtype: string): Promise<string> {
  const prompt = buildPromptdish4(dish, Variant, Language, dishtype);
  try {

    const AIresponse = await Gemini_AI_Model_Option_1.generateContent(prompt);
    const rawText = AIresponse.response.text()
    return `${rawText}`;

  } catch (geminiError) {
    console.log("Gemini option 1 failed", geminiError);

    try {
      const AIresponse = await Gemini_AI_Model_Option_2.generateContent(prompt);
      const rawText = AIresponse.response.text()
      return `${rawText}`;
    } catch (error) {
      console.log("Gemini option 2 failed", error);

      try {
        const AIresponse = await Gemini_AI_Model_Option_3.generateContent(prompt);
        const rawText = AIresponse.response.text()
        return `${rawText}`;
      } catch (error) {
        console.log("Gemini option 3 failed back to groq", error);
        try {
          const groqResponse = await groq.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "llama-3.1-8b-instant"
          });

          const groqText = groqResponse.choices?.[0]?.message?.content
          return `${groqText}`;

        } catch (groqError) {
          console.log("Both Gemini and Groq failed:", groqError);
          return "Error generating content";
        }
      }
    }

  }

}

export async function buildrecipefromdish(dish: string, Variant: string, Language: string, dishtype: string) {
  try {

    const contentFirst = await AI_Model_generateContentFordish1(dish, Variant, Language, dishtype);
    const parsedFirst = await safeParse("test-1", contentFirst);;

    return { ...parsedFirst }
  }
  catch (error) {
    console.error("Error generating recipe content:", error);
    throw new Error("Failed to generate recipe content");
  }
}
