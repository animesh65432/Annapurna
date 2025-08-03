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
    const nutritionData = recipe?.nutritionComparison!

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
                <div>
                    <div className="ml-auto mr-auto  w-[85%] ">
                        <div className="flex flex-col lg:flex-row gap-14 lg:gap-8 justify-between lg:justify-around">
                            <div className="text-[#414141] flex flex-col gap-5">
                                <h1 className="text-center font-[500] text-[1.4rem] md:text-2xl">
                                    Before
                                </h1>
                                <div className=" w-[65vw] sm:w-[60vw] pt-8 pb-8 lg:pt-5 lg:pb-5  md:w-[35vw] lg:w-[320px] mx-auto lg:mx-0 xl:w-[360px]  border border-[#A8A8A8] rounded-md flex flex-col   sm:justify-start sm:items-start gap-8 lg:gap-5 p-[3%] lg:p-[4%]">
                                    <div className="flex flex-col gap-4 sw-[50vw] sm:w-[354px] sm:mx-auto">
                                        {nutritionData?.before && Object.entries(nutritionData.before).map(([key, value]) => (
                                            <div key={key} className="text-[#757575] w-[70%] lg:w-[55%] mx-auto flex gap-2  ">
                                                <div className="relative h-5 w-5 sm:h-7 sm:w-7 text-green-800">
                                                    <Image alt="dishname" fill src="/assets/Nutrition.svg" className="text-green-800" />
                                                </div>
                                                <div className="text-[0.7] sm:text-[1rem]">
                                                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                                    <span>{value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="text-[#414141] flex flex-col gap-5 pb-5 lg:mb-0">
                                <h1 className="text-center relative font-[500] text-[#168B5D] text-2xl">
                                    <Image src="/assets/dashboard/star.svg" alt="star" className="absolute  h-8 w-8 left-[60%] sm:left-[57%] lg:left-[58%] bottom-[64%] " width={200} height={200} />
                                    After
                                </h1>
                                <div className="bg-[#F5EFD8]  border border-[#FFD059]   w-[65vw] sm:w-[60vw] pt-8 pb-8 lg:pt-5 lg:pb-5  md:w-[35vw] lg:w-[320px] mx-auto lg:mx-0 xl:w-[360px]   rounded-md flex flex-col   sm:justify-start sm:items-start gap-8 lg:gap-5 p-[3%] lg:p-[4%]">
                                    <div className="flex flex-col gap-4 sw-[50vw] sm:w-[354px] sm:mx-auto">
                                        {nutritionData?.before && Object.entries(nutritionData.after).map(([key, value]) => (
                                            <div key={key} className="text-[#757575] w-[70%] lg:w-[55%] mx-auto  flex gap-2 ">
                                                <div className="relative h-5 w-5 sm:h-7 sm:w-7 text-green-800">
                                                    <Image alt="dishname" fill src="/assets/Nutrition.svg" className="text-green-800" />
                                                </div>
                                                <div className="text-[0.7] sm:text-[1rem]">
                                                    <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                                                    <span>{value}</span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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

