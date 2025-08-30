import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import InputIcon from "@/public/assets/dashboard/Vector.svg"
import Image from "next/image"
import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from 'next/router';
import { useExploreSuggestions } from "@/hooks/useExploreSuggestions"
import Suggestions from "../Suggestions"
import { debounce } from "@/lib/usedebouce";
import { useTranslation } from "react-i18next"


export default function SearchinInputBox() {
    const { t } = useTranslation();
    const [userInput, setUserInput] = useState<{ diet?: string | null, cuisine?: string | null, q?: string | null }>({
        diet: null,
        cuisine: null,
        q: null
    });
    const CuisineOptions = t("explore.CuisineOptions", { returnObjects: true }) as any[];
    const DietTypeOptions = t("explore.Diet_Type_Options", { returnObjects: true }) as any[];
    const { fetchSuggestions, suggestions, setSuggestions } = useExploreSuggestions()
    const router = useRouter();

    const handleSearch = () => {
        if (!userInput?.diet && !userInput?.cuisine && !userInput?.q) {
            console.log("Please select at least one filter or enter a search term.");
            return;
        } else {
            router.push(`/explore/search?${userInput.diet ? `diet=${userInput.diet}&` : ''}${userInput.cuisine ? `cuisine=${userInput.cuisine}&` : ''}${userInput?.q ? `q=${userInput.q}` : ''}`);
        }
    }

    const debouncedFetchSuggestions = debounce(async (dish: string) => {
        if (dish.length > 2) {
            await fetchSuggestions(dish);
        }
    }, 300);

    useEffect(() => {
        if (userInput?.q) {
            debouncedFetchSuggestions(userInput.q);
        }
    }, [userInput?.q]);

    const selectfromSuggestion = (suggestion: string) => {
        setUserInput?.((prev) => {
            return { ...prev, q: suggestion }
        })
        setSuggestions([])
    }


    return (
        <div className="w-full flex justify-center ">
            <div className=" hidden md:flex relative  rounded-4xl h-[8vh] items-center w-[75%] lg:w-[63%] xl:w-[55%] bg-white shadow-md border-2 border-neutral-100 text-black">
                <Image src={InputIcon} alt="inputicon" className="w-[2vw] h-[3vh] ml-5" />
                <Input value={userInput?.q ?? ""}
                    onChange={(e) => setUserInput?.((prev) => {
                        return { ...prev, q: e.target.value }
                    })}
                    className="border-0 bg-transparent shadow-none  w-[40%] lg:w-[45%] "
                    placeholder={t("explore.Input_placeholder")}
                />
                <Select value={userInput?.diet ?? undefined}
                    onValueChange={(value) => setUserInput?.((prev) => {
                        return { ...prev, diet: value }
                    })}
                >
                    <SelectTrigger className="border-t-0 border-r-0 border-b-0 cursor-pointer  bg-transparent shadow-none ">
                        <SelectValue placeholder={t("explore.Select_Diet_placeholder")} />
                    </SelectTrigger>
                    <SelectContent >
                        {DietTypeOptions.map((option) => {
                            const [key, label] = Object.entries(option)[0];
                            return <SelectItem key={key} value={key}>
                                {label as string}
                            </SelectItem>
                        })}
                    </SelectContent>
                </Select>
                <Select value={userInput?.cuisine ?? undefined} onValueChange={(value) => setUserInput?.((prev) => {
                    return { ...prev, cuisine: value }
                })}>
                    <SelectTrigger className="border-t-0 cursor-pointer border-r-0 border-b-0 rounded-0 bg-transparent shadow-none">
                        <SelectValue placeholder={t("explore.Select_Cuisine_placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                        {CuisineOptions.map((option) => {
                            const [key, label] = Object.entries(option)[0];
                            console.log(label)
                            return (
                                <SelectItem key={key} value={label as string}>
                                    {label as string}
                                </SelectItem>
                            );
                        })}
                    </SelectContent>
                </Select>

                <div className="flex cursor-pointer ml-[5%] lg:ml-[2%] bg-[#168B5D] text-white rounded-3xl p-2">
                    <Search onClick={handleSearch} />
                </div>
                {suggestions.length > 0 &&
                    <Suggestions selectfromSuggestion={selectfromSuggestion} suggestions={suggestions} setSuggestions={setSuggestions} />}
            </div>
        </div >
    )
}
