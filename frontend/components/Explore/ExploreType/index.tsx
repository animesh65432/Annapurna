import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import SearchinInputBox from '../SearchinInputBox'
import MobileSearch from '../MobileSearch'
import { useGetdishes } from "@/hooks/useGetdishes"
import DishSkeleton from '../DishSkelton'
import Dish from '../Dish'
import { ArrowLeft, ArrowRight } from "lucide-react"

type Props = {
    name: string
}

const ExploreTypes: React.FC<Props> = ({ name }) => {
    const [currentPage, setCurrentPage] = useState<number>(0)

    const { fetchDishes, dishes, IsLoading, totalItems } = useGetdishes()

    const ITEMS_PER_PAGE = 30

    const fetchData = async () => {
        try {
            await fetchDishes(name, currentPage, ITEMS_PER_PAGE)
        } catch (error) {
            console.error('Error fetching dishes:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [name, currentPage])


    useEffect(() => {
        setCurrentPage(0)
    }, [name])


    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)
    const hasNext = currentPage < totalPages - 1
    const hasPrev = currentPage > 0
    const startIndex = totalItems > 0 ? (currentPage * ITEMS_PER_PAGE) + 1 : 0
    const endIndex = Math.min((currentPage + 1) * ITEMS_PER_PAGE, totalItems)

    const handlePrevious = () => {
        if (hasPrev) {
            setCurrentPage(prev => prev - 1)
        }
    }

    const handleNext = () => {
        if (hasNext) {
            setCurrentPage(prev => prev + 1)
        }
    }

    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] flex min-h-dvh overflow-y-auto w-full flex-col gap-10 lg:gap-8 pt-[220px]">
            <div className="flex flex-col gap-6 md:gap-10 fixed top-0 left-0 right-0 z-50 bg-slate-50 p-5">
                <Header />
                <SearchinInputBox />
                <MobileSearch />
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-[90%] sm:w-[85%] mx-auto pb-5'>
                {IsLoading ? (
                    Array.from({ length: ITEMS_PER_PAGE }).map((_, index) => (
                        <DishSkeleton key={`skeleton-${index}`} />
                    ))
                ) : dishes.length > 0 ? (
                    dishes.map((dish, index) => (
                        <Dish
                            key={`${dish.id || dish.name}-${index}`}
                            index={startIndex + index - 1}
                            name={dish.name}
                            img={dish.image_url}
                            prep_time={dish.prep_time}
                            cuisine={dish.cuisine}
                            id={dish.id}
                        />
                    ))
                ) : (
                    <div className="col-span-full text-center py-20">
                        <p className="text-gray-500 text-lg">No dishes found for "{name}"</p>
                    </div>
                )}
            </div>


            {!IsLoading && totalItems > 0 && (
                <div className="flex flex-col items-center gap-4 pb-5">

                    <div className="text-center text-sm text-gray-600">
                        <div className="font-medium">
                            Page {currentPage + 1} of {totalPages}
                        </div>
                        <div className="mt-1">
                            Showing {startIndex}-{endIndex} of {totalItems} dishes
                        </div>
                    </div>


                    <div className="flex justify-center items-center gap-3 sm:gap-5 md:gap-6">
                        <button
                            onClick={handlePrevious}
                            disabled={!hasPrev || IsLoading}
                            className={`
                                flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
                                rounded-full border transition-all duration-200
                                ${!hasPrev || IsLoading
                                    ? 'border-gray-300 bg-gray-100 cursor-not-allowed opacity-50'
                                    : 'border-[#048452] bg-white hover:bg-[#048452] cursor-pointer'
                                }
                            `}
                        >
                            <ArrowLeft
                                className={`
                                    w-5 h-5 sm:w-6 sm:h-6 transition-colors
                                    ${!hasPrev || IsLoading
                                        ? 'text-gray-400'
                                        : 'text-[#048452] group-hover:text-white'
                                    }
                                `}
                            />
                        </button>

                        <button
                            onClick={handleNext}
                            disabled={!hasNext || IsLoading}
                            className={`
                                flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 
                                rounded-full border transition-all duration-200
                                ${!hasNext || IsLoading
                                    ? 'border-gray-300 bg-gray-100 cursor-not-allowed opacity-50'
                                    : 'border-[#048452] bg-white hover:bg-[#048452] cursor-pointer'
                                }
                            `}
                        >
                            <ArrowRight
                                className={`
                                    w-5 h-5 sm:w-6 sm:h-6 transition-colors
                                    ${!hasNext || IsLoading
                                        ? 'text-gray-400'
                                        : 'text-[#048452] group-hover:text-white'
                                    }
                                `}
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ExploreTypes