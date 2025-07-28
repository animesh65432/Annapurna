import Header from "../Header";
import { useFecthrecipe } from "@/hooks/useFecthrecipe";
import { useRecipeStore } from "@/store/recipe";
import { useEffect } from "react";
import Pageloading from "../Pageloading";
import Image from "next/image";
import { Button } from "../ui/button";
import { useRouter } from "next/router"

type Props = {
    recipeId: string;
};

export default function NutritionComparison({ recipeId }: Props) {
    const { recipe, setRecipe } = useRecipeStore();
    const { fetchrecipe } = useFecthrecipe();
    const router = useRouter()

    const loadRecipe = async (id: string) => {
        console.log("Fetching recipe:", id);
        const data = await fetchrecipe(id);
        if (data) {
            setRecipe(data);
            console.log("Recipe set");
        }
    };

    useEffect(() => {
        if (!recipe || recipe.id !== recipeId) {
            loadRecipe(recipeId);
        }
    }, [recipeId, recipe]);

    if (!recipe) {
        return <Pageloading />
    }

    const nutritionData = recipe?.nutritionComparison;

    const navigate_to = (Id: string) => {
        router.push(`/Recipe/${Id}`)
    }
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] min-h-dvh flex flex-col justify-between">
            <Header />
            <div className="ml-auto mr-auto pt-16 w-[85%] flex-1">
                <div className="flex flex-col lg:flex-row gap-14 lg:gap-8 justify-between lg:justify-around">
                    <div className="text-[#414141] flex flex-col gap-5">
                        <h1 className="text-center font-[500] text-3xl">
                            Before
                        </h1>
                        <div className=" w-[70vw] sm:w-[60vw] md:w-[50vw] lg:w-[420px] mx-auto lg:mx-0 xl:w-[460px] h-[498px] border border-[#A8A8A8] rounded-md flex flex-col justify-center  sm:justify-start sm:items-start gap-5 sm:p-[3%] lg:p-[10%]">
                            <div className="relative w-[60vw] sm:w-[350px] lg:w-[330px] xl:w-[354px] h-[30vh] sm:h-[45vh] lg:h-[215px] ml-auto mr-auto">
                                <Image src={recipe.Img} alt="dish" fill className="object-cover rounded-md" />
                            </div>
                            <div className="flex flex-col gap-2 sw-[50vw] sm:w-[354px] ml-[6%]   sm:mx-auto">
                                {nutritionData?.before && Object.entries(nutritionData.before).map(([key, value]) => (
                                    <div key={key} className="text-[#757575] flex gap-2 ">
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



                        <h1 className="text-center relative font-[500] text-[#168B5D] text-3xl">
                            <Image src="/assets/dashboard/star.svg" alt="star" className="absolute  h-8 w-8 left-[60%] sm:left-[57%] lg:left-[58%] bottom-[64%] " width={200} height={200} />
                            After
                        </h1>
                        <div className="bg-[#F5EFD8]  w-[70vw] sm:w-[60vw] md:w-[50vw]   lg:w-[420px] mx-auto lg:mx-0 xl:w-[460px] h-[530px] sm:h-[498px] border border-[#FFD059] rounded-md flex flex-col justify-center  sm:justify-start sm:items-start gap-5 sm:p-[3%] lg:pl-[10%] lg:pt-[10%] lg:pr-[10%] lg:pb-[3%]">
                            <div className="relative w-[60vw] sm:w-[350px] lg:w-[330px] xl:w-[354px] h-[30vh] sm:h-[45vh] lg:h-[215px] ml-auto mr-auto">
                                <Image src={recipe.Img} alt="dish" fill className="object-cover rounded-md" />
                            </div>
                            <div className="flex flex-col gap-2 sw-[50vw] sm:w-[354px] ml-[6%]   sm:mx-auto">
                                {nutritionData?.before && Object.entries(nutritionData.after).map(([key, value]) => (
                                    <div key={key} className="text-[#757575] flex gap-2 ">
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
                            <Button onClick={() => navigate_to(recipeId)} className="bg-[#FFD059] hover:bg-[#f5d37e]  text-black  w-[80%] ml-auto mr-auto">See Recipe</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}