import Dish from "../Dish"
import { useGetdishes } from "@/hooks/useGetdishes"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { useEffect } from "react"
import DishSkeleton from "../DishSkelton";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/router"
import { useTranslation } from "react-i18next";
export default function Veg() {
    const { dishes, IsLoading, fetchDishes } = useGetdishes();
    const { i18n, t } = useTranslation()
    const router = useRouter();

    async function init() {
        await fetchDishes("Vegetarian")
    }
    useEffect(() => {
        init()
    }, [i18n.language])
    return (
        <div className="flex flex-col gap-5 ml-auto mr-auto pt-5 w-[85%] sm:w-[80%] lg:w-[85%]">
            <h1 onClick={() => router.push(`/explore/Vegetarian`)} className="text-[#3f3f3f] hover:underline cursor-pointer font-bold text-xl sm:text-2xl mb-4 flex items-center">
                {t('explore.Vegetarian')}
                <span>
                    <ChevronRight className="ml-1  w-6 h-6 sm:w-8 sm:h-8" />
                </span>
            </h1>

            <Carousel opts={{ align: "start" }} className="w-full relative">
                <div className="absolute sm:right-[19%] md:right-[6%] lg:right-[10%] xl:right-[6%] -top-10 right-0 hidden sm:flex  sm:space-x-2 z-10">
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
    )
}
