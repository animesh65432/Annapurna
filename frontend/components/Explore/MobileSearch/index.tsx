import { useEffect, useState, useRef } from "react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react";
import { DishTypeOptions, indianDishes, micronutrientIcons } from "@/lib/Herosectiondata";
import { Button } from "@/components/ui/button";
import { useClickOutside } from "@/hooks/useClickoutside"
import { useExploreContext } from "@/context";

export default function MobileSearch() {
    const [toggleSearch, settootleserch] = useState(false);
    const modelref = useRef<HTMLDivElement>(null)
    const [dish, setdish] = useState<string>("")
    const [DietType, SetDietType] = useState<string>("")
    const [Nutrient, setNutrient] = useState<string>("")
    const { setIsfiltering, setdish: setIndiandish, dish: Indiandish } = useExploreContext()

    useEffect(() => {
        if (toggleSearch) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [toggleSearch]);

    useClickOutside(modelref, () => {
        settootleserch(false)
    })

    const handleserch = () => {
        const isFiltering = dish.length > 0 || Nutrient.length > 0 || DietType.length > 0;
        setIsfiltering(isFiltering);

        if (isFiltering) {
            const filterdish = indianDishes.filter((d) => {
                const matchName = dish ? d.name.toLowerCase().includes(dish.toLowerCase()) : true;
                const matchDiet = DietType
                    ? DietType === "any"
                        ? true
                        : d.diettype.toLowerCase() === DietType.toLowerCase()
                    : true;

                const matchNutrient = Nutrient
                    ? Array.isArray(d.variant) && d.variant.some((n) =>
                        n.toLowerCase().includes(Nutrient.toLowerCase())
                    )
                    : true;

                return matchName && matchDiet && matchNutrient;
            });

            setIndiandish(filterdish);
        } else {
            setIndiandish(Indiandish);
        }
        settootleserch(false)
    }

    return (
        <>
            {!toggleSearch && (
                <div className="flex md:hidden cursor-pointer">
                    <Search className="absolute text-black left-[14%] translate-y-3" />
                    <Input
                        onClick={() => settootleserch(true)}
                        placeholder="start your search"
                        className="w-[85%] ml-auto mr-auto h-[6vh] cursor-pointer rounded-2xl text-white relative placeholder:text-black placeholder:pl-[10%]"
                    />
                </div>
            )}

            {toggleSearch && (
                <>
                    <div className="fixed inset-0 bg-black/10 z-50 block md:hidden" />

                    <div ref={modelref} className="flex flex-col gap-10 sm:gap-6  md:gap-5 md:hidden fixed inset-x-0 top-[15vh] w-[90vw] p-7 ml-auto mr-auto rounded-md sm:h-[38vh] z-50 bg-white overflow-auto ">
                        <div>
                            <Search className="absolute text-black left-[10%] sm:left-[10%] translate-y-4 sm:translate-y-4" />
                            <Input
                                onChange={(e) => setdish(e.target.value)}
                                placeholder="dish name"
                                className="w-full pl-[12%] cursor-pointer sm:pl-[8%] sm:w-[90%] ml-auto mr-auto h-[7vh] rounded-2xl text-black relative placeholder:text-black  placeholder:pl-[3%] sm:placeholder:pl-[2%] "
                            />
                        </div>
                        <div className="flex  flex-col sm:flex-row w-full sm:w-[90%] h-[10vh] ml-auto mr-auto gap-5 sm:gap-2">
                            <Select onValueChange={(value) => SetDietType(value)} >
                                <SelectTrigger className="border-1 cursor-pointer w-[80%] sm:w-[51%]   ml-auto sm:ml-0  mr-auto  border-slate-200 rounded-md bg-transparent shadow-none  text-black p-5 sm:p-5">
                                    <SelectValue placeholder="Diet Type" />
                                </SelectTrigger>
                                <SelectContent >
                                    {DishTypeOptions.map((dish) => (
                                        <SelectItem key={dish.value} value={dish.value}>{dish.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            <Select onValueChange={(value) => setNutrient(value)}>
                                <SelectTrigger className="rounded-md cursor-pointer ml-auto sm:ml-0 mr-auto p-5 text-black w-[80%] sm:w-[49%] bg-transparent shadow-none ">
                                    <SelectValue placeholder="Nutrient Focus" />
                                </SelectTrigger>
                                <SelectContent className="">
                                    {micronutrientIcons.map((micronutrient) => (
                                        <SelectItem key={micronutrient.label} value={micronutrient.label}>{micronutrient.label}</SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="mt-[10%] sm:mt-0 flex justify-center">
                            <Button onClick={handleserch} className="bg-[#168B5D] cursor-pointer hover:bg-[#3c6d5a] text-white ml-auto mr-auto flex items-center gap-2 px-6 py-2">
                                <Search className="w-4 h-4" />
                                Search
                            </Button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}
