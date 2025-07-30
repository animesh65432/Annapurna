import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { useAuthstore } from "@/store/useauth";
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next"
import { Select } from "@/components/ui/select"
import { useHasMounted } from "@/hooks/useHasMounted";

export default function Header() {
    const { token } = useAuthstore()
    const hasMounted = useHasMounted();
    const { t } = useTranslation("Header")
    return (
        <header className="ml-auto mr-auto pt-5 flex justify-between items-center w-[85%]  ">
            <Link href="/">
                <ul >
                    <Image src="/assets/Icon.svg" alt="Logo" width={200} height={200} />
                </ul>
            </Link>
            <ul className=" hidden md:flex gap-8 items-center text-[1rem] text-[#353535]">
                <Link href="/Explore">
                    <li >{t("Explore")}</li>
                </Link>
                {hasMounted && token &&
                    <Link href="/saves" className="text-[#353535] cursor-pointer">
                        Save
                    </Link>
                }
                <li>
                    <Select></Select>
                </li>
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
                            {token &&
                                <Link href="/saves" className="cursor-pointer">
                                    <ul>
                                        Save
                                    </ul>
                                </Link>
                            }
                        </nav>
                    </SheetContent>
                </Sheet>

            </ul>
        </header>
    );
}
