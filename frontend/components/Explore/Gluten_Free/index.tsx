import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useGetdishes } from "@/hooks/useGetdishes"
import DishSkeleton from "../DishSkelton";
import { useEffect } from "react";
import Dish from "../Dish";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next";

export default function Gluten_Free() {
    const { dishes, IsLoading, fetchDishes } = useGetdishes();
    const router = useRouter();
    const { i18n } = useTranslation()

    useEffect(() => {
        fetchDishes("Gluten_Free");
    }, [i18n.language]);

    return (
        <div className="flex pb-5 flex-col gap-5 ml-auto mr-auto pt-5 w-[85%] sm:w-[80%] lg:w-[85%]">
            <h1 onClick={() => router.push("/explore/Gluten_Free")} className="text-[#565656] hover:underline cursor-pointer font-bold text-xl sm:text-2xl mb-4 flex items-center">
                Gluten Free
                <span>
                    <ChevronRight className="ml-1  w-6 h-6 sm:w-8 sm:h-8" />
                </span>
            </h1>

            <Carousel opts={{ align: "start" }} className="w-full relative">

                <div className="absolute -top-10 sm:right-[19%] md:right-[6%] lg:right-[10%] xl:right-[6%] hidden sm:flex  sm:space-x-2 z-10">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>

                <CarouselContent>
                    {IsLoading
                        ? Array.from({ length: 5 }).map((_, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                            >
                                <DishSkeleton />
                            </CarouselItem>
                        ))
                        : dishes.map((dish, index) => (
                            <CarouselItem
                                key={index}
                                className="basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
                            >
                                <Dish
                                    index={index}
                                    name={dish.name}
                                    img={dish.image_url}
                                    prep_time={dish.prep_time}
                                    cuisine={dish.cuisine}
                                    id={dish.id}
                                />
                            </CarouselItem>
                        ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

