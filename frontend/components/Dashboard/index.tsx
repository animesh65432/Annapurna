"use client"
import Header from "./Header"
import Herosection from "./Herosection"
import TrendingRecipes from "./Trendingrecipes"
import Discover from "./Discover"
import MobileTrendingRecipes from "./MobileTrendingRecipes"
import { useGenrateRecipe } from "@/hooks/useGenrateRecipe"
import FoodLoading from "../Foodloading"
import { useHasMounted } from "@/hooks/useHasMounted"

type Props = {
    dishname: string | null
}

export default function Dashboard({ dishname }: Props) {
    const {
        createRecipe,
        isGenrateRecipeloading,
        setisGenrateRecipeloading,
        currentStep,
        stepMessage
    } = useGenrateRecipe()
    const hasmounted = useHasMounted()

    if (!hasmounted) return null

    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh overflow-y-auto w-full flex flex-col xl:justify-around gap-5 xl:gap-0 pb-0 xl:pb-4">
            <Header />
            {!isGenrateRecipeloading &&
                <Herosection
                    dishname={dishname}
                    createRecipe={createRecipe}
                    setisGenrateRecipeloading={setisGenrateRecipeloading}
                />
            }
            {!isGenrateRecipeloading && <TrendingRecipes />}
            {!isGenrateRecipeloading && <Discover />}
            {!isGenrateRecipeloading && <MobileTrendingRecipes />}
            {isGenrateRecipeloading && (
                <FoodLoading
                    currentServerStep={currentStep}
                    serverMessage={stepMessage}
                />
            )}
        </div>
    )
}