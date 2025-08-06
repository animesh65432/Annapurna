import { useState } from "react";
import type { RecipeTypes } from "@/types"
import { config } from "@/config"
import { toast } from "react-toastify"

export const useGenrateRecipe = () => {
    const [isGenrateRecipeloading, setisGenrateRecipeloading] = useState<boolean>(false);
    const [issucessed, setisucessed] = useState<boolean>(false);
    const [currentStep, setCurrentStep] = useState<string>("");
    const [stepMessage, setStepMessage] = useState<string>("");
    const createRecipe = async (
        dish: string,
        variant: string,
        DishType: string
    ): Promise<{ id: string, recipe: RecipeTypes } | null> => {
        setisGenrateRecipeloading(true);
        setCurrentStep("");
        setStepMessage("");

        try {
            const params = new URLSearchParams({ dish, variant, DishType });
            const eventSource = new EventSource(`${config.API_URL}/ai/generate-recipe?${params.toString()}`);

            let finalRecipe: { id: string, recipe: RecipeTypes } | null = null;

            return await new Promise((resolve) => {
                eventSource.onmessage = (event) => {
                    try {
                        const parsedData = JSON.parse(event.data);

                        if (parsedData.step === "complete") {
                            console.log("✅ Recipe generation completed:", parsedData.recipe);
                            setCurrentStep("4");
                            setStepMessage("Recipe ready!");
                            setTimeout(() => {
                                setisucessed(true);
                                setCurrentStep("");
                                setStepMessage("");
                            }, 1000);

                            finalRecipe = {
                                id: parsedData.id || "",
                                recipe: parsedData.recipe,
                            };
                            eventSource.close();
                            resolve(finalRecipe);
                        } else if (parsedData.step === "error") {
                            console.log("❌ Error received:", parsedData);
                            setisGenrateRecipeloading(false);
                            setisucessed(false);
                            setCurrentStep("");
                            setStepMessage("");
                            eventSource.close();
                            toast.error("Error generating recipe. Please try again.");
                            resolve(null);
                        } else {
                            console.log("📦 Received partial data:", parsedData);
                            if (parsedData.step) {
                                setCurrentStep(parsedData.step);
                            }
                            if (parsedData.message) {
                                setStepMessage(parsedData.message);
                            }
                        }
                    } catch (error) {
                        console.error("⚠️ Failed to parse event data:", event.data);
                    }
                };

                eventSource.onerror = (error) => {
                    console.error("❌ EventSource error:", error);
                    setisGenrateRecipeloading(false);
                    setCurrentStep("");
                    setStepMessage("");
                    eventSource.close();
                    toast.error("Something went wrong. Please try again.");
                    resolve(null);
                };
            });
        } catch (error) {
            console.error("❌ createRecipe exception:", error);
            setisGenrateRecipeloading(false);
            setCurrentStep("");
            setStepMessage("");
            return null;
        }
    };

    return {
        isGenrateRecipeloading,
        createRecipe,
        issucessed,
        setisGenrateRecipeloading,
        currentStep,
        stepMessage
    };
};