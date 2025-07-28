import { useRecipeStore } from "@/store/recipe"

export default function FuncFat() {
    const { recipe } = useRecipeStore()
    return (
        <div className="flex flex-col gap-4 w-[85%] mx-auto">
            <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl">FuncFat</h1>
            <div className="text-[#757575] text-[1rem] lg:text-[1.1rem] leading-relaxed pb-5">{recipe?.funFact}</div>
        </div>
    )
}
