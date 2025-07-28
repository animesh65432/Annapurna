import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Header() {

    return (
        <header className="ml-auto mr-auto pt-5 flex justify-between items-center w-[85%]  ">
            <Link href="/">
                <ul >
                    <Image src="/assets/Icon.svg" alt="Logo" width={200} height={200} />
                </ul>
            </Link>
            <ul className=" hidden md:flex gap-8 items-center text-[1rem] text-[#353535]">
                <Link href="/Explore">
                    <li >Explore</li>
                </Link>
                <Link href="/Saves" className="cursor-pointer">
                    <li>
                        Save
                    </li>
                </Link>
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
                            <Link href="/Explore">
                                <ul>Explore</ul>
                            </Link>
                            <Link href="/Saves" className="cursor-pointer">
                                <ul>
                                    Save
                                </ul>
                            </Link>
                        </nav>
                    </SheetContent>
                </Sheet>

            </ul>
        </header>
    );
}
