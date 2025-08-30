import { usetexttospech } from "@/hooks/usetexttospech"
import { useRecipeStore } from "@/store/recipe"
import { LoaderCircle, Mic } from "lucide-react"
import { useTranslation } from "react-i18next"
export default function History() {
    const { recipe } = useRecipeStore()
    const { t } = useTranslation()
    const { call, IsLoading } = usetexttospech()

    const OnSpech = async () => {
        if (recipe) {
            const ingredients = recipe.healthierVersion.ingredients.join(", ")
            await call(ingredients)
        }
    }
    return (
        <div className="flex flex-col gap-4 w-[85%] mx-auto">
            <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl flex items-center gap-5">{t("recipe.History")}  </h1>
            <div className="text-[#757575] text-[1rem] lg:text-[1.1rem] leading-relaxed">
                {recipe?.foodHistoryContext}
            </div>

        </div>
    )
}
