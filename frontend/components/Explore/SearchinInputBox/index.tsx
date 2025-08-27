import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DishTypeOptions } from "@/lib/Herosectiondata"
import InputIcon from "@/public/assets/dashboard/Vector.svg"
import Image from "next/image"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { dishesfrom } from "@/lib/Herosectiondata"
import { useRouter } from 'next/router';
import { useExploreSuggestions } from "@/hooks/useExploreSuggestions"
import Suggestions from "../Suggestions"
import { debounce } from "@/lib/usedebouce";
import { useTranslation } from "react-i18next"

type Props = {
    diet?: string | null,
    cuisine?: string | null,
    q?: string | null
}

export default function SearchinInputBox({ diet, cuisine, q }: Props) {
    const [dish, setdish] = useState<string>("")
    const [DietType, SetDietType] = useState<string>("")
    const [Cuisine, setCuisine] = useState<string>("")
    const { t } = useTranslation();
    const { fetchSuggestions, suggestions, setSuggestions } = useExploreSuggestions()
    const router = useRouter();

    const handleSearch = () => {
        router.push(`/explore/search?${DietType ? `diet=${DietType}&` : ''}${Cuisine ? `cuisine=${Cuisine}&` : ''}${dish ? `q=${dish}` : ''}`);
    }
    useEffect(() => {
        if (diet) {
            SetDietType(diet);
        }
        if (cuisine) {
            setCuisine(cuisine);
        }
        if (q) {
            setdish(q);
        }
    }, [diet, cuisine, q]);

    const debouncedFetchSuggestions = debounce(async (dish: string) => {
        if (dish.length > 2) {
            await fetchSuggestions(dish);
        }
    }, 300);

    useEffect(() => {
        if (dish) {
            debouncedFetchSuggestions(dish);
        }
    }, [dish]);

    const selectfromSuggestion = (suggestion: string) => {
        setdish(suggestion);
    }
    return (
        <div className="w-full flex justify-center ">
            <div className=" hidden md:flex relative  rounded-4xl h-[8vh] items-center w-[75%] lg:w-[63%] xl:w-[55%] bg-white shadow-md border-2 border-neutral-100 text-black">
                <Image src={InputIcon} alt="inputicon" className="w-[2vw] h-[3vh] ml-5" />
                <Input value={dish} onChange={(e) => setdish(e.target.value)} className="border-0 bg-transparent shadow-none  w-[40%] lg:w-[45%] " placeholder="Write Dish name" />
                <Select value={DietType} onValueChange={(value) => SetDietType(value)}>
                    <SelectTrigger className="border-t-0 border-r-0 border-b-0 cursor-pointer  bg-transparent shadow-none w-[20%]">
                        <SelectValue placeholder="Diet Type" />
                    </SelectTrigger>
                    <SelectContent >
                        {DishTypeOptions.map((dish) => (
                            <SelectItem key={dish} value={dish}>{dish}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={Cuisine} onValueChange={(value) => setCuisine(value)} >
                    <SelectTrigger className="border-t-0 cursor-pointer border-r-0 border-b-0 rounded-0 bg-transparent shadow-none w-[20%]">
                        <SelectValue placeholder="Cuisine Type" />
                    </SelectTrigger>
                    <SelectContent className="">
                        {dishesfrom.map((place) => (
                            <SelectItem key={place} value={place}>{place.split("_").join(" ")}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="flex cursor-pointer ml-[5%] lg:ml-[2%] bg-[#168B5D] text-white rounded-3xl p-2">
                    <Search onClick={handleSearch} />
                </div>
                {suggestions.length > 0 &&
                    <Suggestions selectfromSuggestion={selectfromSuggestion} suggestions={suggestions} setSuggestions={setSuggestions} />}
            </div>
        </div>
    )
}
