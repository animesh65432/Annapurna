import { useRecipeStore } from "@/store/recipe"
import { Check } from "lucide-react"
import { useState } from "react"

export default function Steps() {
    const { recipe } = useRecipeStore()
    const [StepsIndexs, SetStepsIndexs] = useState<number[]>([])
    const Ontoggole = (index: number) => {
        if (StepsIndexs.includes(index)) {
            const FilterStepsIndexs = StepsIndexs.filter((StepsIndex) => StepsIndex !== index)
            SetStepsIndexs(FilterStepsIndexs)
        } else {
            SetStepsIndexs((prev) => [...prev, index])
        }
    }
    return (
        <div className="flex flex-col gap-4 w-[85%] mx-auto">
            <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl">Steps</h1>
            <div className="flex flex-col gap-4">
                {recipe?.healthierVersion.steps.map((step, index) =>
                    <div
                        key={step}
                        onClick={() => Ontoggole(index)}
                        className={`text-[#757575] flex text-[1rem] lg:text-[1.1rem] items-start gap-2 cursor-pointer ${StepsIndexs.includes(index) ? "line-through" : ""
                            }`}
                    >
                        <div
                            className="border border-[#434343] w-[18px] h-[18px] rounded flex justify-center items-center flex-shrink-0 mt-1"
                        >
                            {StepsIndexs.includes(index) && <Check className="w-4 h-4" />}
                        </div>
                        <span className="break-words">{step}</span>
                    </div>
                )
                }
            </div>
        </div>
    )
}
