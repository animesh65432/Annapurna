import { useRecipeStore } from "@/store/recipe"
import { useState } from "react"
import { Check } from "lucide-react"

export default function Ingredients() {
    const [IngredientsIndexs, SetIngredientsIndexs] = useState<number[]>([])
    const { recipe } = useRecipeStore()

    const Ontoggole = (index: number) => {
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
                    <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl">Ingredients</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {
                            recipe?.healthierVersion.ingredients.map((ingredient, index) => (
                                <div
                                    onClick={() => Ontoggole(index)}
                                    key={ingredient}
                                    className={`text-[#757575] flex items-start gap-2 text-[1rem] lg:text-[1.1rem] cursor-pointer ${IngredientsIndexs.includes(index) ? "line-through" : ""}`}
                                >
                                    <div className="border border-[#434343] w-[18px] h-[18px] rounded flex justify-center items-center mt-[4px]">
                                        {IngredientsIndexs.includes(index) && <Check className="w-3 h-3" />}
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
