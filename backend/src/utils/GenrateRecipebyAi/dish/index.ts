import { Gemini_AI_Model_Option_1 } from "../../../services/GemaniAi/optionone";
import { Gemini_AI_Model_Option_2 } from "../../../services/GemaniAi/optiontwo";
import { Gemini_AI_Model_Option_3 } from "../../../services/GemaniAi/optionthree"
import { groq } from "../../../services/Groq";
import { safeParse } from "../index"

export function buildPromptdish1(dishOrRecipe: string, Variant: string, Language: string, dishtype: string) {
  return `You are an expert Indian recipe developer and nutritionist specializing in creating healthier versions of traditional dishes while preserving authentic flavors and taste.

The dish or recipe name is: ${dishOrRecipe}.
The variant is: ${Variant}.
The language is: ISO 639-1 standard-${Language}.
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
  return `You are an expert nutritionist and Indian cuisine analyst with deep knowledge of traditional recipes and their nutritional profiles.

The dish or recipe name is: ${dishOrRecipe}
The variant is: ${Variant}
The target language is: ISO 639-1 standard-${Language}
The dish type is: ${dishtype}
The reference recipe is: ${recipe}

Analyze the provided recipe and create an accurate nutritional comparison following the exact structure below:

CRITICAL INSTRUCTIONS:
- Return ONLY the JSON object below
- DO NOT include any text before or after the JSON
- DO NOT use markdown formatting or code blocks
- DO NOT add explanations, comments, or additional text
- Ensure all quotes are properly escaped
- End your response immediately after the closing brace

LANGUAGE HANDLING FOR ISO 639-1 standard-${Language}:
- If Language is "en" (English): Use English camelCase keys and English values
- If Language is "bn" (Bengali): Use Bengali keys and Bengali values
- If Language is "hi" (Hindi): Use Hindi keys and Hindi values
- If Language is other: Use that language for both keys and values
- NEVER mix languages - keep everything consistent in the target language
- NO English words in non-English responses (avoid "অলিভ অয়েল", use "জলপাই তেল" or native equivalent)

REQUIRED JSON STRUCTURE:
{
  "comparison": {
    "before": {
      // Create 6-9 dynamic key-value pairs based on dish type: ${dishtype}
      // Keys should describe nutritional/cooking aspects in target language
      // Values should describe traditional preparation in target language
      // Focus on: ingredients, cooking methods, nutritional content, preparation style
    },
    "after": {
      // Same key concepts as "before" but showing healthier modifications
      // Values should describe improvements and healthier alternatives
      // All content in target language with native ingredient names
    }
  }
}

KEY SUGGESTIONS BY LANGUAGE:

FOR ENGLISH (en):
- riceType, oilType, proteinSource, vegetableContent, spiceLevel, cookingMethod, fiberContent, calorieDensity
- baseIngredients, creamContent, saltLevel, sugarContent, cookingTime, nutritionDensity

FOR BENGALI (bn):
- "চালের ধরন", "তেলের ধরন", "প্রোটিনের উৎস", "সবজির পরিমাণ", "মশলার মাত্রা", "রান্নার পদ্ধতি", "আঁশের পরিমাণ", "ক্যালোরির ঘনত্ব"
- "মূল উপাদান", "ক্রিমের পরিমাণ", "লবণের মাত্রা", "চিনির পরিমাণ", "রান্নার সময়", "পুষ্টির ঘনত্ব"

FOR HINDI (hi):
- "चावल का प्रकार", "तेल का प्रकार", "प्रोटीन स्रोत", "सब्जी की मात्रा", "मसाले का स्तर", "पकाने की विधि", "फाइबर की मात्रा", "कैलोरी घनत्व"
- "मुख्य सामग्री", "क्रीम की मात्रा", "नमक का स्तर", "चीनी की मात्रा", "पकाने का समय", "पोषण घनत्व"

TRANSLATION EXAMPLES:
English → Bengali:
- "olive oil" → "জলপাই তেল"
- "brown rice" → "বাদামি চাল" 
- "grilled chicken" → "ভাজা মুরগি"
- "high fiber" → "বেশি আঁশ"

English → Hindi:
- "olive oil" → "जैतून तेल"
- "brown rice" → "भूरे चावल"
- "grilled chicken" → "ग्रिल्ड चिकन" 
- "high fiber" → "उच्च फाइबर"

IMPORTANT: Your response must start with { and end with }. Nothing else. Create keys and values appropriate for the language ISO 639-1 standard-${Language}. Be consistent - if using Bengali, everything should be in Bengali script and vocabulary. If using Hindi, everything in Devanagari script. If using English, use proper English terms throughout.`;
}
export function buildPromptdish3(dishOrRecipe: string, Variant: string, Language: string, dishtype: string, recipe: string) {
  return `You are an expert Indian cuisine analyst specializing in identifying and explaining ingredient substitutions for healthier cooking while maintaining authentic flavors.

The dish or recipe name is: ${dishOrRecipe}.
The variant is: ${Variant}.
The language is: ISO 639-1 standard-${Language}.
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
The language is: ISO 639-1 standard-${Language}.
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
The language is: ISO 639-1 standard-${Language}.
The dish type is: ${dishtype}.

Create a comprehensive analysis and healthier recipe following the exact structure below:

CRITICAL JSON FORMATTING INSTRUCTIONS:
- Your response must be ONLY valid JSON - no text before or after
- Start with { and end with }
- Use double quotes for all strings, never single quotes
- No trailing commas after the last item in objects or arrays
- Escape quotes inside strings with \\"
- Test your JSON structure before responding
- No line breaks inside string values
- Ensure all brackets and braces match perfectly
- Use camelCase for all keys (no spaces or hyphens)
- All property names must be in double quotes

{
  "dish": "Write the name of the dish with the ${Variant} specification - e.g., 'Healthy Butter Chicken (Low-Fat Version)' in ${Language}",
  "motivationalMessage": "Write an inspiring 2-3 sentence message in ${Language} that motivates people to try this healthier version. Focus on how they can enjoy their favorite ${dishOrRecipe} while taking care of their health and achieving their ${Variant} goals. Make it warm, encouraging, and positive.",
  "foodHistoryContext": "Write a brief but engaging paragraph in ${Language} about the origins and cultural significance of ${dishOrRecipe}. Include its regional roots, traditional preparation methods, cultural importance, and how it has evolved over time. Make it interesting and informative while respecting the dish's heritage.",
  "funFact": "Write a fun fact in ${Language} about the dish or its ingredients that adds cultural richness and engages the reader.",
  "healthierVersion": {
    "description": "Write 3-4 sentences in ${Language} about this healthier version",
    "ingredients": [
      "List all ingredients with quantities here"
    ],
    "steps": [
      "List all cooking steps in order here"
    ]
  },
  "comparison": {
    "before": {
      "doughComposition": "Traditional dough composition",
      "fillingComposition": "Traditional filling composition", 
      "cookingOil": "Traditional cooking oil used",
      "cookingMethod": "Traditional cooking method",
      "portionSize": "Traditional portion size",
      "calorieCount": "Traditional calorie count",
      "nutritionalProfile": "Traditional nutritional profile"
    },
    "after": {
      "doughComposition": "Healthier dough composition",
      "fillingComposition": "Healthier filling composition",
      "cookingOil": "Healthier cooking oil used", 
      "cookingMethod": "Healthier cooking method",
      "portionSize": "Healthier portion size",
      "calorieCount": "Healthier calorie count",
      "nutritionalProfile": "Improved nutritional profile"
    }
  },
  "substitutions": [
    {
      "from": "Original ingredient used in traditional ${dishOrRecipe} recipe",
      "to": "Healthier substitute ingredient that aligns with ${Variant} goals",
      "why": "Explain in ${Language} why this substitution works - include health benefits, taste impact, and how it maintains authenticity"
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
- Include 6-9 relevant aspects in the comparison that differentiate traditional vs healthier version
- Make the food history engaging and informative without being too lengthy
- Focus on positive aspects of both tradition and health improvements
- Write in a tone that makes people excited to cook and eat healthier
- Preserve authentic flavors and taste while creating healthier alternatives

IMPORTANT: 
If you output anything other than valid JSON, the request will be rejected.
Do NOT include markdown formatting, comments, or extra text. 
Your entire response must be a single valid JSON object.
VALIDATE your JSON before sending.`;
}


export async function AI_Model_generateContentFordish2(dish: string, Variant: string, Language: string, dishtype: string, recipe: any): Promise<string> {
  const prompt = buildPromptdish2(dish, Variant, Language, dishtype, recipe);
  try {
    const groqResponse = await groq.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "openai/gpt-oss-20b",
      response_format: { type: "json_object" }
    });

    const groqText = groqResponse.choices?.[0]?.message?.content;
    console.log("Groq Option 1 Response:", groqText);
    return groqText || "";

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

    const groqResponse = await groq.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "openai/gpt-oss-20b",
      response_format: { type: "json_object" }
    });

    const groqText = groqResponse.choices?.[0]?.message?.content;
    console.log("Groq Option 1 Response:", groqText);
    return groqText || "";

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

    const groqResponse = await groq.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "openai/gpt-oss-20b",
      response_format: { type: "json_object" }
    });

    const groqText = groqResponse.choices?.[0]?.message?.content;
    console.log("Groq Option 1 Response:", groqText);
    return groqText || "";
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
export async function AI_Model_generateContentForDish(
  dish: string,
  variant: string,
  language: string,
  dishtype: string
): Promise<string> {
  const prompt = buildPromptdish1(dish, variant, language, dishtype);

  try {
    const groqResponse = await groq.chat.completions.create({
      messages: [{ role: "system", content: prompt }],
      model: "openai/gpt-oss-20b",
      response_format: { type: "json_object" }
    });

    const groqText = groqResponse.choices?.[0]?.message?.content;
    console.log("Gemini Option 1 Response:", groqText);
    return groqText || "";
  } catch (geminiError) {
    console.log("Gemini option 1 failed:", geminiError);

    try {
      const AIresponse = await Gemini_AI_Model_Option_2.generateContent(prompt);
      const rawText = AIresponse.response.text();
      console.log("Gemini Option 2 Response:", AIresponse);
      return rawText;
    } catch (geminiError2) {
      console.log("Gemini option 2 failed:", geminiError2);

      try {
        const AIresponse = await Gemini_AI_Model_Option_3.generateContent(prompt);
        const rawText = AIresponse.response.text();
        console.log("Gemini Option 3 Response:", AIresponse.response.text());
        return rawText;
      } catch (geminiError3) {
        console.log("Gemini option 3 failed, trying Groq:", geminiError3);

        try {
          const groqResponse = await groq.chat.completions.create({
            messages: [{ role: "system", content: prompt }],
            model: "llama-3.1-8b-instant"
          });

          const groqText = groqResponse.choices?.[0]?.message?.content;
          if (!groqText) {
            throw new Error("No content received from Groq");
          }
          console.log("Groq Response:", groqText);
          return groqText;
        } catch (groqError) {
          console.error("All AI models failed:", groqError);
          throw new Error("All AI models failed to generate content");
        }
      }
    }
  }
}


export async function buildRecipeFromDish(dish: string, variant: string, language: string, dishtype: string) {
  try {

    const content = await AI_Model_generateContentForDish(dish, variant, language, dishtype);
    const parsedcontent = await safeParse(content);
    const content1 = await AI_Model_generateContentFordish2(dish, variant, language, dishtype, content)
    const parsedcontent1 = await safeParse(content1);
    const content2 = await AI_Model_generateContentFordish3(dish, variant, language, dishtype, content)
    const parsedcontent2 = await safeParse(content2)
    const content3 = await AI_Model_generateContentFordish4(dish, variant, language, dishtype)
    const parsedcontent3 = await safeParse(content3)

    return {
      ...parsedcontent,
      ...parsedcontent1,
      ...parsedcontent2,
      ...parsedcontent3
    }
  } catch (error) {
    console.error("Error generating recipe content:", error);
    throw new Error("Failed to generate recipe content");
  }
}
