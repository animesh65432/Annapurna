import { useRecipeStore } from "@/store/recipe"
import { useState } from "react"
import { Check } from "lucide-react"
import { useTranslation } from "react-i18next"


export default function Ingredients() {
    const [IngredientsIndexs, SetIngredientsIndexs] = useState<number[]>([])
    const { recipe } = useRecipeStore()
    const { t } = useTranslation()

    const OnToggole = (index: number) => {
        if (IngredientsIndexs.includes(index)) {
            const FilterIngredientsIndexs = IngredientsIndexs.filter((IngredientsIndex) => IngredientsIndex !== index)
            SetIngredientsIndexs(FilterIngredientsIndexs)
        } else {
            SetIngredientsIndexs((prev) => [...prev, index])
        }
    }

    return (
        <>
            <div className="w-[85%] mx-auto flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl">{t("recipe.Ingredients")}</h1>
                    <div className="grid grid-cols-1 gap-5">
                        {
                            recipe?.healthierVersion.ingredients.map((ingredient, index) => (
                                <div
                                    onClick={() => OnToggole(index)}
                                    key={ingredient}
                                    className="text-[#757575] flex items-start gap-2 text-[1rem] lg:text-[1.1rem] cursor-pointer"
                                >
                                    <div
                                        className="border border-[#434343] w-[18px] h-[18px] rounded flex justify-center items-center flex-shrink-0 mt-1"
                                    >
                                        {IngredientsIndexs.includes(index) && <Check className="w-4 h-4" />}
                                    </div>
                                    <span>{ingredient}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
