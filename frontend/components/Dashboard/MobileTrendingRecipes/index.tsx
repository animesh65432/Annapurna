import Image from "next/image"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
type Props = {
    createRecipe: (dish: string, variant: string, DishType: string) => Promise<{ id: string, recipe: any } | null>,
    setisGenrateRecipeloading: React.Dispatch<React.SetStateAction<boolean>>
}
export default function MobileTrendingRecipes({ createRecipe, setisGenrateRecipeloading }: Props) {
    const router = useRouter()
    const { t, i18n } = useTranslation()
    const trendingRecipes = t("Dashboard.Trending_recipes.recipes", { returnObjects: true }) as Array<{
        name: string,
        time: number,
        when: string[],
        img: string,
        after: string,
        id: string
    }>
    async function generateRecipe(name: string, variant: string, notes: string) {
        const result = await createRecipe(name, variant, notes);
        if (result && result.id) {
            router.push(`/recipe/${result.id}`);
            setisGenrateRecipeloading(false)
        }
    }

    const handleClick = (recipe: {
        name: string,
        time: number,
        when: string[],
        img: string,
        after: string,
        id: string
    }) => {
        if (i18n.language === "en") {
            router.push(`/recipe/${recipe.id}`)
        }
        else {
            const variant = recipe.after.split(" ")[0]
            generateRecipe(recipe.name, variant, "")
        }
    }

    return (
        <div className="sm:hidden w-[90%] ml-auto mr-auto  ">
            <h1 className="font-semibold text-[#565656] text-[1.5rem] mb-5">{t("Dashboard.Trending_recipes.title")}</h1>
            <div className="flex flex-col gap-6">
                {
                    trendingRecipes.map((recipe) => {
                        return <div key={recipe.id} className="bg-[#FFFFFF]  flex flex-col gap-1 md:gap-4 rounded-md p-4">
                            <div className="relative w-[90%] h-[30vh] overflow-hidden rounded-lg mx-auto">
                                <Image src={recipe.img} alt={recipe.name} fill />
                            </div>
                            <div className="w-[90%] mx-auto flex flex-col gap-2">
                                <div className="text-[#434343] font-medium text-[1.1rem]">{recipe.name}</div>
                                <div className="flex items-center text-[0.9rem] whitespace-nowrap text-[#434343] gap-2">
                                    <div className="flex items-center gap-1">
                                        <div className="relative w-5 h-5 shrink-0">
                                            <Image src="/assets/dashboard/Timer.svg" alt="timer" fill />
                                        </div>
                                        {recipe.time} Minutes
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <div className="relative w-5 h-5 shrink-0">
                                            <Image src="/assets/dashboard/ForkKnife.svg" alt="timer" fill />
                                        </div>
                                        {recipe.when[0].length > 10 ? recipe.when[0].slice(0, 15) + "..." : recipe.when[0]}
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => handleClick(recipe)} className="w-[90%] cursor-pointer mx-auto text-[#168B5D] flex items-center justify-between  ">
                                {t("Dashboard.See_healthier_Version")}
                                <div className="relative w-8 h-8">
                                    <Image alt="arrow left" src="/assets/dashboard/arrow_left_alt.svg" fill />
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </div>
    )
}