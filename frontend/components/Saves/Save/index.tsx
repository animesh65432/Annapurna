import { RecipeTypes } from "@/types"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/router"
export default function Save({ recipe }: { recipe: RecipeTypes }) {
    const router = useRouter()

    const navigate_to = (Id: string) => {
        router.push(`/recipe/${Id}`)
    }

    if (!recipe) {
        return null
    }
    return (
        <div className="w-full bg-white p-3 rounded-md flex gap-3 sm:gap-0 flex-col sm:flex-row">
            <div className="flex gap-2 sm:gap-4">
                <div className="flex flex-col gap-2 flex-1">
                    <div className="flex justify-between">
                        <h1 className=" text-[1.1rem] sm:text-xl">{recipe.dish}</h1>
                        <Button onClick={() => navigate_to(recipe.id)} className="bg-[#048452] text-bl hidden sm:block hover:bg-[#437964]">See More</Button>
                    </div>
                    <div className="text-[#048452] text-[0.9rem] sm:text-xl">{recipe.variant}</div>
                    <div className="text-[#535353] text-[0.8rem] sm:text-[1rem]">
                        {recipe.funFact}
                    </div>
                    <Button className="bg-[#048452] text-bl block  ml-auto sm:hidden hover:bg-[#437964]">See More</Button>
                </div>
            </div>
        </div>
    )
}
