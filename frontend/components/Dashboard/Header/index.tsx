import { Select, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { useAuthstore } from "@/store/useauth";
import { useHasMounted } from "@/hooks/useHasMounted"
// import { SelectTrigger } from "@radix-ui/react-select";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router"
// import { optionsforLanguages } from "@/lib/Herosectiondata"

export default function Header() {
    const router = useRouter()
    const hasMounted = useHasMounted();
    const { i18n } = useTranslation()
    const { token } = useAuthstore()
    return (
        <header className="ml-auto  mr-auto pt-5 flex justify-between items-center w-[80%]  md:max-w-[75%] lg:max-w-[740px] xl:max-w-[1120px]">
            <Link href="/">
                <ul >
                    <Image src="/assets/Icon.svg" alt="Logo" width={200} height={200} />
                </ul>
            </Link>
            <ul className=" hidden md:flex gap-8 items-center text-[1rem] ">
                <Link href="/explore">
                    <li className="text-[#353535]">Explore</li>
                </Link>
                {hasMounted && token &&
                    <Link href="/saves" className="text-[#353535] cursor-pointer">Save</Link>
                }
            </ul>
            <ul className="md:hidden block">
                <Sheet>
                    <SheetTrigger>
                        <div className="relative w-8 h-8">
                            <Image
                                src="/assets/dashboard/menu.svg"
                                alt="Menu Icon"
                                className="w-full h-full object-cover"
                                fill
                            />
                        </div>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-4 p-6">
                        <SheetClose asChild>
                            <XIcon className="size-8 text-[#048452] ml-auto " />
                        </SheetClose>
                        <nav className="flex  font-poppins text-[1rem] text-[#048452] font-medium flex-col justify-center items-center gap-8">
                            <ul> <Link href="/explore">Explore</Link></ul>
                            {token &&
                                <ul>
                                    <Link href="/saves">
                                        Save
                                    </Link>
                                </ul>
                            }
                        </nav>
                    </SheetContent>
                </Sheet>

            </ul>
        </header>
    );
}
