type Props = {
    id: string,
    name: string,
    img: string,
    index: number,
    prep_time: string,
    cuisine: string
}

import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"

export default function Dish({ name, img, prep_time, cuisine, id }: Props) {
    return (
        <Link href={`/explore/dish/${id}`}>
            <div className="w-[35vw] min-[400px]:w-[30vw] md:w-[25vw] lg:w-[200px] grid grid-rows-[auto_1fr] gap-1 min-[400px]:gap-2">
                <div className="relative w-full h-[80px] min-[400px]:h-auto min-[400px]:aspect-[4/3] overflow-hidden rounded-md">
                    <Image src={img} fill alt="dish" className="object-cover" />
                </div>

                <div className="flex flex-col gap-1 min-[400px]:gap-2">
                    <div className="text-[#434343] font-medium text-[0.8rem] min-[400px]:text-[0.9rem] sm:text-[1rem] leading-tight line-clamp-2">
                        {name}
                    </div>
                    <div className="text-[#757575] font-normal flex flex-col gap-1 min-[400px]:gap-2 text-[0.8rem] min-[400px]:text-[0.9rem]">
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <div className="relative w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 shrink-0">
                                <Image src="/assets/dashboard/Timer.svg" alt="timer" fill />
                            </div>
                            {prep_time} Minutes
                        </div>
                        <div className="flex items-center gap-1 whitespace-nowrap">
                            <div className="relative w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 shrink-0">
                                <MapPin className="relative w-4 h-4 min-[400px]:w-5 min-[400px]:h-5 shrink-0" />
                            </div>
                            {cuisine.split("_").join("  ")}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}