import Header from "@/components/Header";
import { useState } from "react";
import { useRecipeStore } from "@/store/recipe";
import { Save, Share } from "lucide-react";
import Image from "next/image";
import { useAuthstore } from "@/store/useauth";
import { toast } from "react-toastify"
import { useSaverecipe } from "@/hooks/useSaverecipe";
import ShareSection from "@/components/Share";
import SigninwithGoogle from "@/components/SinginWithgoogle";


export default function NutritionComparison() {
    const { recipe } = useRecipeStore();
    const { token } = useAuthstore();
    const [auth, setauth] = useState<boolean>(false)
    const { saverecipe } = useSaverecipe()
    const [isShareOPen, setisShareOPen] = useState<boolean>(false)
    const nutritionData = recipe?.comparison!

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
            <div className="flex flex-col  gap-10">
                <Header />
                <div className="text-[#434343] w-[85%] mx-auto text-[1.5rem] sm:text-3xl flex justify-between">
                    <h1>
                        {recipe?.dish}
                    </h1>
                    <div className="flex gap-6">
                        <Save onClick={addrecipe} />
                        <Share onClick={() => setisShareOPen((prev) => !prev)} />
                    </div>
                </div>
                <div className="ml-auto mr-auto w-[85%]">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-30 justify-center lg:justify-center items-stretch">
                        <div className="text-[#414141] flex flex-col gap-5 flex-1 max-w-[400px] h-full mx-auto lg:mx-0">
                            <h1 className="text-center font-[500] text-[1.4rem] md:text-2xl">
                                Before
                            </h1>
                            <div className="w-full flex-1 border border-[#A8A8A8] rounded-md flex flex-col p-6">
                                <div className="flex flex-col gap-4 flex-1">
                                    {nutritionData?.before && Object.entries(nutritionData.before).map(([key, value]) => (
                                        <div key={key} className="flex items-start gap-3 text-[#757575]">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="relative h-6 w-6 text-green-800">
                                                    <Image
                                                        alt="nutrition icon"
                                                        fill
                                                        src="/assets/Nutrition.svg"
                                                        className="text-green-800"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 text-sm sm:text-base leading-relaxed">
                                                <span className="font-medium capitalize text-[#414141] block mb-1">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                                                </span>
                                                <span className="text-[#757575] break-words">
                                                    {value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="text-[#414141] flex flex-col gap-5 flex-1 max-w-[400px] h-full mx-auto lg:mx-0">
                            <h1 className="text-center relative font-[500] text-[#168B5D] text-2xl">
                                <Image
                                    src="/assets/dashboard/star.svg"
                                    alt="star"
                                    className="absolute h-8 w-8 -top-2 left-[60%]"
                                    width={32}
                                    height={32}
                                />
                                After
                            </h1>
                            <div className="w-full flex-1 bg-[#F5EFD8] border border-[#FFD059] rounded-md flex flex-col p-6">
                                <div className="flex flex-col gap-4 flex-1">
                                    {nutritionData?.after && Object.entries(nutritionData.after).map(([key, value]) => (
                                        <div key={key} className="flex items-start gap-3 text-[#757575]">
                                            <div className="flex-shrink-0 mt-1">
                                                <div className="relative h-6 w-6 text-green-800">
                                                    <Image
                                                        alt="nutrition icon"
                                                        fill
                                                        src="/assets/Nutrition.svg"
                                                        className="text-green-800"
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex-1 text-sm sm:text-base leading-relaxed">
                                                <span className="font-medium capitalize text-[#414141] block mb-1">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}:
                                                </span>
                                                <span className="text-[#757575] break-words">
                                                    {value}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            {isShareOPen && <ShareSection setisShareOPen={setisShareOPen} dishname={recipe?.dish!} />}
            {auth && <SigninwithGoogle setauth={setauth} />}
        </>
    );
}

