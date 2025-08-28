import { useRecipeStore } from "@/store/recipe"
import { MoveRight } from "lucide-react"
import { useTranslation } from "react-i18next"

export default function WhyTheseChanges() {
    const { t } = useTranslation()
    const { recipe } = useRecipeStore()
    return (
        <div className="w-[85%] mx-auto flex flex-col gap-2">
            <div className="text-[#434343] text-[1.2rem] sm:text-2xl">{t("recipe.Why_These_Changes")}  ?</div>
            <div className="flex flex-col gap-4">
                {recipe?.substitutions.map((substitution, index) => <div key={index} className="text-[#757575] flex items-center gap-2 text-[1rem] lg:text-[1.1rem] ">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                                <p className="line-through">{substitution.from}</p>
                                <MoveRight className="h-[18px] w-[18px]" />
                                <p>{substitution.to}</p>
                            </div>
                        </div>
                        <div className="text-[#757575] flex text-[1rem] lg:text-[1.1rem]">{substitution.why}</div>
                    </div>
                </div>)}
            </div>
        </div>
    )
}
