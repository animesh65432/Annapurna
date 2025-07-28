import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DishTypeOptions, micronutrientIcons } from "@/lib/Herosectiondata"
import InputIcon from "@/public/assets/dashboard/Vector.svg"
import Image from "next/image"
import { Search } from "lucide-react"
import { useExploreContext } from "@/context"
import { useState } from "react"
import { indianDishes } from "@/lib/Herosectiondata"

export default function SearchinInputBox() {
    const [dish, setdish] = useState<string>("")
    const [DietType, SetDietType] = useState<string>("")
    const [Nutrient, setNutrient] = useState<string>("")
    const { setIsfiltering, setdish: setIndiandish, dish: Indiandish } = useExploreContext()
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
    }
    return (
        <div className="w-full flex justify-center ">
            <div className=" hidden md:flex  rounded-4xl h-[8vh] items-center w-[75%] lg:w-[63%] xl:w-[55%] bg-white shadow-md border-2 border-neutral-100 text-black">
                <Image src={InputIcon} alt="inputicon" className="w-[2vw] h-[3vh] ml-5" />
                <Input value={dish} onChange={(e) => setdish(e.target.value)} className="border-0 bg-transparent shadow-none  w-[40%] lg:w-[45%] " placeholder="Write Dish name" />
                <Select value={DietType} onValueChange={(value) => SetDietType(value)}>
                    <SelectTrigger className="border-t-0 border-r-0 border-b-0 cursor-pointer  bg-transparent shadow-none w-[20%]">
                        <SelectValue placeholder="Diet Type" />
                    </SelectTrigger>
                    <SelectContent >
                        {DishTypeOptions.map((dish) => (
                            <SelectItem key={dish.value} value={dish.value}>{dish.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <Select value={Nutrient} onValueChange={(value) => setNutrient(value)} >
                    <SelectTrigger className="border-t-0 cursor-pointer border-r-0 border-b-0 rounded-0 bg-transparent shadow-none w-[20%]">
                        <SelectValue placeholder="Nutrient Focus" />
                    </SelectTrigger>
                    <SelectContent className="">
                        {micronutrientIcons.map((micronutrient) => (
                            <SelectItem key={micronutrient.label} value={micronutrient.value}>{micronutrient.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                <div className="flex cursor-pointer ml-[5%] lg:ml-[2%] bg-[#168B5D] text-white rounded-3xl p-2">
                    <Search onClick={handleserch} />
                </div>
            </div>
        </div>
    )
}
