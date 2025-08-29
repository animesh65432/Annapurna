import { useRecipeStore } from "@/store/recipe"
import { Check, LoaderCircle, Mic } from "lucide-react"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import { usetexttospech } from "@/hooks/usetexttospech"
export default function Steps() {
    const { recipe } = useRecipeStore()
    const { t } = useTranslation()
    const { call, IsLoading } = usetexttospech()
    const [StepsIndexs, SetStepsIndexs] = useState<number[]>([])
    const Ontoggole = (index: number) => {
        if (StepsIndexs.includes(index)) {
            const FilterStepsIndexs = StepsIndexs.filter((StepsIndex) => StepsIndex !== index)
            SetStepsIndexs(FilterStepsIndexs)
        } else {
            SetStepsIndexs((prev) => [...prev, index])
        }
    }

    const OnSpech = async () => {
        if (recipe) {
            const ingredients = recipe.healthierVersion.steps.join(", ")
            await call(ingredients)
        }
    }
    return (
        <div className="flex flex-col gap-4 w-[85%] mx-auto">
            <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl flex items-center gap-5">{t("recipe.Steps")} {IsLoading ? <LoaderCircle className="animate-spin" /> : <Mic onClick={OnSpech} />}</h1>
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
