import { Skeleton } from "@/components/ui/skeleton"

export function SaveSkeleton() {
    return (
        <div className="w-full bg-white p-3 rounded-md flex gap-3 sm:gap-0 flex-col sm:flex-row">
            <div className="block sm:hidden h-[17vh] sm:h-32 w-28 relative rounded-md overflow-hidden">
                <Skeleton className="h-full w-full" />
            </div>
            <div className="flex gap-2 sm:gap-4">
                <div className="hidden sm:block h-[17vh] sm:h-32 w-28 relative rounded-md overflow-hidden">
                    <Skeleton className="h-full w-full" />
                </div>
                <div className="flex flex-col gap-2 flex-1 w-full">
                    <div className="flex justify-between items-center">
                        <Skeleton className="h-5 w-[40%]" />
                        <Skeleton className="h-8 w-24 hidden sm:block" />
                    </div>
                    <Skeleton className="h-4 w-[30%]" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-8 w-24 ml-auto sm:hidden" />
                </div>
            </div>
        </div>
    )
}
