import { useRecipeStore } from "@/store/recipe"
import { useTranslation } from "react-i18next"

export default function FuncFat() {
    const { recipe } = useRecipeStore()
    const { t } = useTranslation()
    return (
        <div className="flex flex-col gap-4 w-[85%] mx-auto">
            <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl">{t("recipe.FunFact")}</h1>
            <div className="text-[#757575] text-[1rem] lg:text-[1.1rem] leading-relaxed pb-5">{recipe?.funFact}</div>
        </div>
    )
}
