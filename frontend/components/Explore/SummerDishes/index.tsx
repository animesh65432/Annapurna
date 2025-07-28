import { indianDishes } from "@/lib/Herosectiondata"
import Dish from "../Dish"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function SummerDishes() {
    const Summerdishs = indianDishes.filter((dish) => dish.season === "summer")
    return (
        <div className=" flex flex-col gap-5 ml-auto mr-auto pt-5 w-[85%] sm:w-[80%] lg:w-[85%]">
            <h1 className="text-[#565656] font-bold text-xl sm:text-2xl mb-4 flex items-center">
                Refreshing Summer Dishes
            </h1>

            <Carousel opts={{ align: "start" }} className="w-full relative">
                <div className="absolute sm:right-[19%] md:right-[6%] lg:right-[10%] xl:right-[6%] -top-10 right-0 hidden sm:flex  sm:space-x-2 z-10">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>

                <CarouselContent>
                    {Summerdishs.map((dish, index) => (
                        <CarouselItem
                            key={index}
                            className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                        >
                            <Dish
                                index={index}
                                name={dish.name}
                                variant={dish.variant}
                                img={dish.img}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

        </div>
    )
}
