import { Button } from "@/components/ui/button";
import { useRouter } from 'next/router'

export default function Discover() {
    const router = useRouter();

    const handleGoToExplore = () => {
        router.push('/Explore');
    };
    return (
        <div className="bg-[url('/dashboard/Discover.png')] rounded-lg  p-8 bg-cover mb-5 bg-center ml-auto mr-auto pt-5  flex flex-col justify-between w-[90%] sm:w-[85%] md:w-[80%]  md:max-w-[75%] lg:max-w-[750px] h-[221px] sm:h-[259px] xl:hidden">
            <div>
                <h1 className="text-[#FFFFFF] font-semibold text-[1.4rem] sm:text-[1.6rem]">Discover More Indian
                    <br />
                    <span className="text-[#FFD059]">
                        Recipe With AI
                    </span>
                </h1>
            </div>
            <Button onClick={handleGoToExplore} className="bg-[#FFD059] hover:bg-[#FFC107] text-[#404040] ml-auto mr-auto sm:ml-0 sm:mr-0 w-[90%] sm:w-[20%]">See More</Button>
        </div>
    )
}
