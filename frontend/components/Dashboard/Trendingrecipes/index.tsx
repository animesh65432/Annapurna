import { trendingRecipes } from "@/lib/Herosectiondata"
import Recipe from "../Recipe"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

export default function TrendingRecipes() {
    const [recipeIndex, setRecipeIndex] = useState(0)
    const [IsendNumber, setIsendNumber] = useState<number>(3)
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
        router.push('/Explore');
    };

    const recipes = getRecipes()
    return (
        <div className=" hidden sm:flex flex-col gap-4 w-[85%]  md:max-w-[75%] lg:max-w-[740px] xl:max-w-[1120px] ml-auto mr-auto">
            <h1 className="text-[#565656] font-bold text-start text-[1.6rem]">Trending recipes</h1>
            <div className="flex gap-10">
                <div className="flex w-full lg:w-fit justify-between gap-6 lg:gap-4 xl:gap-6">
                    {
                        recipes.map((recipe, index) => (
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
                                />
                            </motion.div>
                        ))
                    }

                </div>
                <div className=" bg-[url('/assets/dashboard/discover.svg')] p-4 bg-center bg-cover hidden xl:flex flex-col justify-between h-[200px] w-[350px] rounded-md ">
                    <div className="font-semibold text-[1.1rem]">
                        <div>Discover More Indian </div>
                        <div className="text-[#FFD059]">Recipe With AI</div>
                    </div>
                    <Button onClick={handleGoToExplore} className="bg-[#FFD059] hidden md:block hover:bg-[#F2C100]  shadow-2xl w-[50%] text-[#404040]">See More</Button>
                </div>
            </div>
        </div>
    )
} ``
