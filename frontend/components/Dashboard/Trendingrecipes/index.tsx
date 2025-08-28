import Recipe from "../Recipe"
import { Button } from "@/components/ui/button"
import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next";
import { useHasMounted } from "@/hooks/useHasMounted"

type Props = {
    createRecipe: (dish: string, variant: string, DishType: string) => Promise<{ id: string, recipe: any } | null>,
    setisGenrateRecipeloading: React.Dispatch<React.SetStateAction<boolean>>
}

export default function TrendingRecipes({ createRecipe, setisGenrateRecipeloading }: Props) {
    const { t } = useTranslation();
    const [recipeIndex, setRecipeIndex] = useState(0)
    const [IsendNumber, setIsendNumber] = useState<number>(3)
    const trendingRecipes = t("Dashboard.Trending_recipes.recipes", { returnObjects: true }) as Array<{
        name: string,
        time: number,
        when: string[],
        img: string,
        after: string,
        id: string
    }>
    const hasmuted = useHasMounted()
    const router = useRouter();



    useEffect(() => {
        const interval = setInterval(() => {
            setRecipeIndex(prevIndex => (prevIndex + 1) % trendingRecipes.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])


    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth
            console.log("Width:", width)
            if (width < 1024) {
                setIsendNumber(2)
            } else {
                setIsendNumber(3)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    const getRecipes = () => {
        const totalRecipes = trendingRecipes.length
        const recipesToShow = IsendNumber

        const recipes = []
        for (let i = 0; i < recipesToShow; i++) {
            const index = (recipeIndex + i) % totalRecipes
            recipes.push(trendingRecipes[index])
        }

        return recipes
    }

    const handleGoToExplore = () => {
        router.push('/explore');
    };

    const recipes = getRecipes()

    console.log(trendingRecipes, "TrendingRecipes")

    if (!hasmuted) {
        return null
    }
    return (
        <div className=" hidden sm:flex flex-col gap-4 w-[85%]  md:max-w-[75%] lg:max-w-[740px] xl:max-w-[1120px] ml-auto mr-auto">
            <h1 className="text-[#565656] font-bold text-start text-[1.6rem]">{t("Dashboard.Trending_recipes.title")}</h1>
            <div className="flex gap-10">
                <div className="flex w-full lg:w-fit justify-between gap-6 lg:gap-4 xl:gap-6">
                    {
                        recipes.map((recipe) => (
                            <motion.div
                                key={recipe.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                            >
                                <Recipe
                                    name={recipe.name}
                                    time={recipe.time}
                                    when={recipe.when}
                                    image={recipe.img}
                                    after={recipe.after}
                                    id={recipe.id}
                                    createRecipe={createRecipe}
                                    setisGenrateRecipeloading={setisGenrateRecipeloading}
                                />
                            </motion.div>
                        ))
                    }

                </div>
                <div className=" bg-[url('/assets/dashboard/discover.svg')] p-4 bg-center bg-cover hidden xl:flex flex-col justify-between h-[200px] w-[350px] rounded-md ">
                    <div className="font-semibold text-[1.1rem]">
                        <div>{t("Dashboard.Discover.title")}</div>
                        <div className="text-[#FFD059]">{t("Dashboard.Discover.subtitle")}</div>
                    </div>
                    <div>
                        <Button onClick={handleGoToExplore} className="bg-[#FFD059] hidden md:block hover:bg-[#F2C100]  shadow-2xl  text-[#404040]  text-nowrap">{t("Dashboard.Discover.button")}</Button>
                    </div>
                </div>
            </div>
        </div>
    )
} ``
