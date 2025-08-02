import Header from '@/components/Header'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

export default function DishIdSkeleton() {
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] flex min-h-dvh overflow-y-auto w-full flex-col gap-10 lg:gap-8">
            <Header />
            <div className="w-[59vw] bg-white sm:w-[70vw] md:w-[45vw] xl:w-[35vw] ml-auto mr-auto space-y-6">
                <Skeleton className="h-[30vh] sm:h-[35vh] xl:h-[40vh] w-full rounded-md" />
                <div className="space-y-4">
                    <Skeleton className="h-8 w-3/4" />
                    <div className="flex gap-2">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-16" />
                    </div>
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-32 ml-auto" />
                </div>
            </div>
        </div>
    )
}
