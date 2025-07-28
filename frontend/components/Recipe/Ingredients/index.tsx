import { useRecipeStore } from "@/store/recipe"
import { useState } from "react"
import { Check, Save, Share } from "lucide-react"
import ShareSection from "@/components/Share"
import SigninwithGoogle from "@/components/SinginWithgoogle"
import { useAuthstore } from "@/store/useauth"
import { useSaverecipe } from "@/hooks/useSaverecipe"
import { toast } from "react-toastify"

export default function Ingredients() {
    const [IngredientsIndexs, SetIngredientsIndexs] = useState<number[]>([])
    const [isShareOPen, setisShareOPen] = useState<boolean>(false)
    const [auth, setauth] = useState<boolean>(false)
    const { recipe } = useRecipeStore()
    const { token } = useAuthstore()
    const { saverecipe } = useSaverecipe()

    const Ontoggole = (index: number) => {
        if (IngredientsIndexs.includes(index)) {
            const FilterIngredientsIndexs = IngredientsIndexs.filter((IngredientsIndex) => IngredientsIndex !== index)
            SetIngredientsIndexs(FilterIngredientsIndexs)
        } else {
            SetIngredientsIndexs((prev) => [...prev, index])
        }
    }

    const addrecipe = async () => {
        if (token) {
            console.log(token)
            try {
                console.log("click 1")
                await saverecipe(recipe?.id!)
                toast.success("Sucessfully save it")
            }
            catch (err) {
                console.log(err)
            }
        }
        else {
            setauth(true)
        }
    }
    return (
        <>
            <div className="w-[85%] mx-auto flex flex-col gap-6">
                <div className="text-[#434343] text-[1.3rem] sm:text-3xl flex justify-between">
                    <h1>
                        {recipe?.dish}
                    </h1>
                    <div className="flex gap-6">
                        <Save onClick={addrecipe} />
                        <Share onClick={addrecipe} />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className="text-[#434343] text-[1.2rem] sm:text-2xl">Ingredients</h1>
                    <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                        {
                            recipe?.healthierVersion.ingredients.map((ingredient, index) =>
                                <div onClick={() => Ontoggole(index)} key={ingredient} className={`text-[#757575] flex text-[1rem] lg:text-[1.1rem] items-center gap-2 ${IngredientsIndexs.includes(index) ? "line-through" : ""}`}>
                                    <div className={`border border-[#434343] w-[18px] h-[18px] rounded flex justify-center items-center`}>
                                        {IngredientsIndexs.includes(index) && <Check />}
                                    </div>
                                    {ingredient}
                                </div>)
                        }
                    </div>
                </div>
            </div>
            {isShareOPen && <ShareSection setisShareOPen={setisShareOPen} dishname={recipe?.dish!} />}
            {auth && <SigninwithGoogle setauth={setauth} />}
        </>
    )
}
