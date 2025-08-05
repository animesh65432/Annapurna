import { useRecipeStore } from "@/store/recipe"
import Header from "../Header"
import { useEffect } from "react"
import Pageloading from "../Pageloading"
import { useFecthrecipe } from "@/hooks/useFecthrecipe"
import Ingredients from "./Ingredients"
import Steps from "./Steps"
import WhyTheseChanges from "./WhyTheseChanges"
import History from "./History"
import FuncFat from "./FunFact"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { config } from "@/config"
import NutritionComparison from "./NutritionComparison"

type Props = {
    recipeId: string
}
export default function Recipe({ recipeId }: Props) {
    const { recipe, setRecipe } = useRecipeStore()
    const { fetchrecipe } = useFecthrecipe();


    const loadRecipe = async (id: string) => {
        console.log("Fetching recipe:", id);
        const data = await fetchrecipe(id);
        if (data) {
            setRecipe(data);
            console.log("Recipe set");
        }
    };

    useEffect(() => {
        if (!recipe || recipe.id !== recipeId) {
            setRecipe(null)
            loadRecipe(recipeId);
        }
    }, [recipeId, recipe]);

    if (!recipe) {
        return <Pageloading />
    }

    console.log("Recipe data:", recipe);
    return (
        <GoogleOAuthProvider clientId={config.GOOGLE_CLIENT_ID}>
            <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh flex flex-col gap-6 lg:gap-8 pb-5 ">
                <NutritionComparison />
                <Ingredients />
                <Steps />
                <WhyTheseChanges />
                <History />
                <FuncFat />
            </div>
        </GoogleOAuthProvider>
    )
}
