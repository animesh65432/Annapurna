import { Skeleton } from "@/components/ui/skeleton"

export default function DishSkeleton() {
    return (
        <div className="w-[33vw] h-[20vh] rounded-md sm:h-[34vh] md:w-[25vw] md:h-[32vh] lg:w-[200px] lg:h-[217px] flex flex-col gap-2 bg-white">
            <Skeleton className="w-full h-[80%] rounded-md" />
            <Skeleton className="w-2/3 h-4" />
        </div>
    )
}
