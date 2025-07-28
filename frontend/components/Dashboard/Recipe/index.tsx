import Image from "next/image"
type Props = {
    name: string,
    time: number,
    when: string[],
    image: string,
    after: string
}

export default function Recipe({ name, time, when, image, after }: Props) {
    return (
        <div className="flex flex-col  gap-2">
            <div className="relative w-[37vw]   md:w-[32vw] lg:w-[240px] xl:w-[260px] h-[150px] lg:h-[141px]">
                <Image src={image} alt={name} fill className="object-cover rounded-md" />

                <div className="absolute top-[75%] right-2 flex items-center gap-1 bg-white bg-opacity-70 text-[#006C41] px-2 py-1 rounded-md text-sm font-medium whitespace-nowrap">
                    <span>{after}</span>
                    <div className="relative w-4 h-4 shrink-0">
                        <Image src="/assets/dashboard/Green.svg" alt="Icon" fill />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-[#434343] font-medium text-[1.1rem]">
                    {name}
                </div>

                <div className="text-[#757575] font-normal flex gap-2 text-[0.9rem]">
                    <div className="flex items-center gap-1 whitespace-nowrap">
                        <div className="relative w-5 h-5 shrink-0">
                            <Image src="/assets/dashboard/Timer.svg" alt="timer" fill />
                        </div>
                        {time} Minutes
                    </div>
                    <div className="flex items-center gap-1 whitespace-nowrap">
                        <div className="relative w-5 h-5 shrink-0">
                            <Image src="/assets/dashboard/ForkKnife.svg" alt="timer" fill />
                        </div>
                        {when.join(', ')}
                    </div>
                </div>
                <div className="text-[#006C41] font-medium flex items-center gap-1">
                    See healthier Version
                    <div className="relative w-8 h-8">
                        <Image alt="arrow left" src="/assets/dashboard/arrow_left_alt.svg" fill />
                    </div>
                </div>
            </div>
        </div>

    )
}
