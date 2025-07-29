import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image";
import { DishTypeOptions, micronutrientIcons } from "@/lib/Herosectiondata"
import { useEffect, useState } from "react";
import { placeholders } from "@/lib/Herosectiondata"
import { RecipeFrom } from "@/schema/RecipeSchema"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Getsuggestions } from "@/api/ai";
import { debounce } from "@/lib/usedebouce";
import Suggestions from "../Suggestions";
import { RecipeTypes } from "@/types"
import { useRouter } from "next/router"
import { useRecipeStore } from "@/store/recipe"

export type RecipeFromTypes = z.infer<typeof RecipeFrom>

type Props = {
    dishname: string | null;
    createRecipe: (
        dish: string, variant: string, DishType: string
    ) => Promise<{ id: string; recipe: RecipeTypes } | null>;
    setisGenrateRecipeloading: React.Dispatch<boolean>
}

export default function Herosection({ dishname, createRecipe, setisGenrateRecipeloading }: Props) {
    const { handleSubmit, setValue, watch } = useForm({
        resolver: zodResolver(RecipeFrom),
        defaultValues: {
            dish: "",
            Nutrient: "",
            DishType: ""
        }
    });
    const [placeholderIndex, setPlaceholderIndex] = useState(0)
    const [suggestions, setsuggestions] = useState<string[]>([])
    const router = useRouter()
    const dish = watch("dish");
    const Nutrient = watch("Nutrient");
    const DishType = watch("DishType");
    const { setRecipe } = useRecipeStore()


    useEffect(() => {
        const interval = setInterval(() => {
            setPlaceholderIndex((prev) => (prev + 1) % placeholders.length)
        }, 2000)
        if (dish.length > 0) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [dish])

    const GenerateSuggestionByKey = debounce(async (dish: string) => {
        const response = await Getsuggestions(dish) as { suggestions: string[] }
        setsuggestions(response.suggestions)
    }, 300)


    useEffect(() => {
        if (dish.length === 0) return;
        console.log("clicked");
        GenerateSuggestionByKey(dish);
    }, [dish]);

    useEffect(() => {
        if (!dishname) return
        setValue("dish", dishname)
    }, [dishname])

    const onselectfromsuggestions = (dish: string) => {
        setValue("dish", dish)
        setsuggestions([])
    }


    const OnSubmit = async (data: RecipeFromTypes) => {
        try {
            const response = await createRecipe(data.dish, data.Nutrient, data.DishType)
            console.log(response)
            setRecipe(response?.recipe!)
            router.push(`/nutritionComparison/${response?.id}`)
        } catch (error) {
        }
        finally {
            setisGenrateRecipeloading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit(OnSubmit)} className="border-1 border-[#DEDEDE] bg-[url('/dashboard/Hero.png')] bg-cover bg-center bg-[#F5EFD8] ml-auto mr-auto w-[90%] sm:w-[80%] md:w-[670px] lg:w-[737px] h-[59vh] sm:h-[50vh] md:h-[290px] lg:h-[296px] rounded-2xl p-5 md:p-14 lg:p-8 flex flex-col gap-6">
            <div className="relative flex flex-col gap-3 md:gap-2">
                <div className=" h-10  w-10 sm:h-8 sm:w-8 absolute left-[45%]  md:top-[-24px] lg:top-[-13px]  md:left-[99%] lg:left-[91%] ">
                    <Image src="/assets/dashboard/star.svg" alt="Star Icon" fill />
                </div>
                <h1 className="text-[#414141] text-center text-[1.6rem] sm:text-3xl md:text-[1.8rem] lg:text-3xl mt-9 md:mt-0 ">
                    Amp your recipes
                    <span className="block md:inline  ">
                        <span className="ml-2">With</span>
                        <TextGenerateEffect words="Healthy twists" className="ml-2 text-[#168B5D] inline-block" />
                    </span>
                </h1>


                <div className="text-[#535353] text-center">
                    Generate AI Powered Recipes
                    <br className="sm:hidden block " />
                    <span className="sm:ml-1 ml-0">
                        Just One Click!</span>
                </div>
            </div>
            <div className="flex flex-col gap-4  w-[90%] md:max-w-[478px] mx-auto">
                <div className="flex gap-4 relative">
                    <div className="absolute w-4 h-4 top-3 left-2 sm:top-2 sm:left-2 md:left-8 md:top-3 lg:left-3 lg:top-3">
                        <Image src="/assets/dashboard/Vector.svg" alt="InputIcon" fill />
                    </div>
                    {suggestions.length > 0 && dish.length > 0 && (
                        <Suggestions onselectfromsuggestions={onselectfromsuggestions} setsuggestions={setsuggestions} suggestions={suggestions} />
                    )}
                    <Input placeholder={placeholders[placeholderIndex]} value={dish} onChange={(e) => setValue("dish", e.target.value)} className=" bg-white text-[#404040] pl-7 mx-auto text-sm sm:placeholder:text-[1rem] max500:w-[90%] sm:w-[100%] md:w-[300px] lg:w-[341px] placeholder:text-start  " />
                    <Button className="bg-[#FFD059] cursor-pointer hidden md:block hover:bg-[#F2C100] text-[#404040] lg:max-w-[121px] shadow-md">See Recipe</Button>
                </div>
                <div className="flex ml-2 md:ml-7 gap-2   md:gap-4 justify-center md:justify-start">
                    <Select value={DishType} onValueChange={(value) => setValue("DishType", value)}>
                        <SelectTrigger className={`bg-white rounded-md cursor-pointer  ${DishType ? "text-[#168B5D] border-[#168B5D]" : "text-[#4A4A4A]"}`}>
                            <SelectValue placeholder="Diet Type" />
                        </SelectTrigger>
                        <SelectContent >
                            {DishTypeOptions.map((dish) => (
                                <SelectItem key={dish.value} value={dish.value}>{dish.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select value={Nutrient} onValueChange={(value) => setValue("Nutrient", value)}>
                        <SelectTrigger className={`bg-white cursor-pointer rounded-md ${Nutrient ? "text-[#168B5D] border-[#168B5D]" : "text-[#4A4A4A]"}`}>
                            <SelectValue placeholder="Nutrient Focus" />
                        </SelectTrigger>
                        <SelectContent className="">
                            {micronutrientIcons.map((micronutrient) => (
                                <SelectItem key={micronutrient.label} value={micronutrient.label}>{micronutrient.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
            <Button className="bg-[#FFD059] cursor-pointer ml-auto mr-auto block md:hidden hover:bg-[#f6d47e] text-[#404040] lg:max-w-[121px]">See Recipe</Button>
        </form>
    )
}
