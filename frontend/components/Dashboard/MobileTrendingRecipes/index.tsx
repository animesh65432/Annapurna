import Image from "next/image"
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next"
export default function MobileTrendingRecipes() {
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
    console.log(i18n.language)
    return (
        <div className="sm:hidden w-[90%] ml-auto mr-auto  ">
            <h1 className="font-semibold text-[#565656] text-[1.5rem] mb-5">{t("Dashboard.Trending_recipes.title")}</h1>
            <div className="flex flex-col gap-6">
                {
                    trendingRecipes.map((recipe) => {
                        return <div key={recipe.id} className="bg-[#FFFFFF]  flex flex-col gap-4 rounded-md p-4">
                            <div className="relative w-[80%] h-[30vh] overflow-hidden rounded-lg mx-auto">
                                <Image src={recipe.img} alt={recipe.name} fill />
                            </div>
                            <div className="w-[80%] mx-auto flex flex-col gap-2">
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
                                        {recipe.when[0]}
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => router.push(`/recipe/${recipe.id}`)} className="w-[80%] cursor-pointer mx-auto text-[#168B5D] flex items-center justify-between  ">
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