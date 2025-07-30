"use client"
import React from 'react'
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { indianDishes } from "@/lib/Herosectiondata"
import Image from 'next/image';
import { Button } from "@/components/ui/button"

export default function ExploreId() {
    const router = useRouter();
    const { name } = router.query;
    const IndianDish = indianDishes.filter((dish) => dish.name === name)

    const redirect_to = (dishName: string) => {
        router.push({
            pathname: '/',
            query: { dishname: dishName },
        })
    }
    return <>
        {IndianDish.length > 0 ?
            <div className=" bg-[url('/dashboard/backgroundimage.png')] min-h-dvh flex flex-col gap-10">
                <Header />
                <div className="relative h-[30vh] sm:h-[35vh] xl:h-[40vh] w-[59vw]  sm:w-[70vw] md:w-[45vw] xl:w-[35vw] ml-auto mr-auto rounded-md overflow-hidden">
                    <Image src={IndianDish[0].img} alt='indiandish' fill />
                </div>
                <div className='w-[59vw] sm:w-[70%] md:w-[45%] xl:w-[35%] ml-auto mr-auto flex flex-col gap-4'>
                    <div className='flex  sm:justify-start'>
                        <h1 className='text-black text-xl sm:text-2xl lg:text-3xl '>{IndianDish[0].name}</h1>
                    </div>
                    <div className='flex flex-col gap-2 sm:gap-0 sm:items-start'>
                        <div className='text-[#414141] text-[1.1rem] sm:text-xl mb-1 '>Required Ingredients :</div>
                        <div className='text-[#414141]  text-[0.9rem] sm:text-[1rem] sm:w-full'>
                            {IndianDish[0].ingredients}
                        </div>
                    </div>
                    <div>
                        <div className='text-[#414141] mb-1 text-[1.1rem] sm:text-xl'>
                            Nutrient Focus :
                        </div>
                        <div className='text-[#414141]  text-[0.9rem] sm:text-[1rem]'>
                            {IndianDish[0].variant.join(", ")}
                        </div>
                    </div>
                    <div className='flex w-full justify-end'>
                        <Button onClick={() => redirect_to(IndianDish[0].name)} className='bg-[#FFD059] hover:bg-[#cdb169] p-5 text-black'>See Recipe</Button>
                    </div>
                </div>
            </div > : null
        }
    </>
}
