import React, { useEffect, useCallback } from 'react'
import { useGetdish } from "@/hooks/useGetdish"
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import DishIdSkeleton from './Skeleton'
import Image from 'next/image'
import NotFound from './Notfound'
import FoodLoading from '@/components/Foodloading'
import { useRecipeStore } from "@/store/recipe"
import { useGenrateRecipe } from "@/hooks/useGenrateRecipe"
import { useRouter } from 'next/router'
type Props = {
    dishId: string
}

export default function DishId({ dishId }: Props) {
    const { dish, IsLoading, GetDish } = useGetdish();
    const { isGenrateRecipeloading, createRecipe, setisGenrateRecipeloading } = useGenrateRecipe()
    const { setRecipe } = useRecipeStore();
    const router = useRouter();

    const fetchDish = useCallback(async (id: string) => {
        try {
            await GetDish(id);
        } catch (err) {
            console.error('Failed to fetch dish:', err);
        }
    }, [dishId]);

    useEffect(() => {
        if (dishId) {
            fetchDish(dishId);
        }

    }, [dishId]);


    if (IsLoading) {
        return (
            <DishIdSkeleton />
        );
    }

    if (!dish) {
        return (
            <NotFound />
        );
    }

    const handleSeeRecipe = async () => {
        try {
            const response = await createRecipe(dish.name, "", dish.diet)
            console.log(response)
            setRecipe(response?.recipe!)
            router.push(`/recipe/${response?.id}`)
        } catch (error) {
            console.error('Error creating recipe:', error);
        }
        finally {
            setisGenrateRecipeloading(false)
        }
    };

    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] pb-5 flex min-h-dvh overflow-y-auto w-full flex-col gap-10 lg:gap-8">
            <Header />

            {!isGenrateRecipeloading &&
                <div className="relative h-[30vh] sm:h-[35vh] xl:h-[40vh] w-[59vw] sm:w-[70vw] md:w-[45vw] xl:w-[35vw] ml-auto mr-auto rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src={dish.image_url}
                        alt={`${dish.name} - ${dish.cuisine} cuisine`}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 59vw, (max-width: 1024px) 45vw, 35vw"
                    />
                </div>
            }
            {!isGenrateRecipeloading &&
                <div className='w-[80%] sm:w-[80%] md:w-[65%] xl:w-[75%] ml-auto mr-auto flex flex-col gap-4'>
                    <div className='flex  sm:justify-start'>
                        <h1 className='text-black text-xl sm:text-2xl lg:text-3xl '>{dish.name}</h1>
                    </div>
                    <div className='flex flex-col gap-2 sm:gap-0 sm:items-start'>
                        <div className='text-[#414141] text-[1.1rem] sm:text-xl mb-1 '>About :</div>
                        <div className='text-[#414141]  text-[0.9rem] sm:text-[1rem] sm:w-full'>
                            {dish.description || 'No description available.'}
                        </div>
                    </div>
                    <div className='flex w-full justify-end'>
                        <Button onClick={handleSeeRecipe} className='bg-[#FFD059] hover:bg-[#cdb169] p-5 text-black'>See Recipe</Button>
                    </div>
                </div>
            }
            {isGenrateRecipeloading && <FoodLoading />}
        </div>
    )
}
