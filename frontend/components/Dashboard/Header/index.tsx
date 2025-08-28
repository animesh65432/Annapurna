import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import { useAuthstore } from "@/store/useauth";
import { useHasMounted } from "@/hooks/useHasMounted"
import { XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { optionsforLanguages } from "@/lib/Herosectiondata"
import { useEffect, useState } from "react";


export default function Header() {
    const hasMounted = useHasMounted();
    const [language, setLanguage] = useState<string>("");
    const { i18n, t } = useTranslation()
    const { token } = useAuthstore()


    useEffect(() => {
        if (i18n.language) {
            const selectedLanguage = optionsforLanguages.find(
                (lan) => lan.value === i18n.language
            );
            console.log("Selected Language:", selectedLanguage?.label);
            setLanguage(selectedLanguage?.value || i18n.language);
        }
    }, [i18n.language]);



    return (
        <header className="ml-auto  mr-auto pt-5 flex justify-between items-center w-[80%]  md:max-w-[75%] lg:max-w-[740px] xl:max-w-[1120px]">
            <Link href="/">
                <ul >
                    <Image src="/assets/Icon.svg" alt="Logo" width={200} height={200} />
                </ul>
            </Link>
            <div className=" hidden md:flex items-center  gap-6">
                <ul className="flex gap-8 items-center text-[1rem] ">
                    <Link href="/explore">
                        <li className="text-[#353535] hover:underline">{t("Dashboard.Header.explore")}</li>
                    </Link>
                    {hasMounted && token &&
                        <Link href="/saves" className="text-[#353535] cursor-pointer">Save</Link>
                    }
                </ul>
                <ul>
                    <Select
                        onValueChange={(value) => {
                            setLanguage(value);
                            i18n.changeLanguage(value);
                        }}
                        value={language}
                    >
                        <SelectTrigger className="border border-[#b8b6b6] p-1 font-light rounded focus:border-[#353535] shadow-none text-[#353535] data-[placeholder]:text-[#353535] focus:ring-0 focus:outline-none">
                            <SelectValue placeholder="English" />
                        </SelectTrigger>
                        <SelectContent className="text-[#353535]">
                            {optionsforLanguages.map((lan) => (
                                <SelectItem
                                    key={lan.value}
                                    value={lan.value}
                                    className="text-[#353535] font-medium focus:bg-gray-100"
                                >
                                    {lan.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                </ul>
            </div>

            <ul className="md:hidden block">
                <Sheet >
                    <SheetTrigger className="md:hidden block">
                        <div className="relative w-8 h-8">
                            <Image
                                src="/assets/dashboard/menu.svg"
                                alt="Menu Icon"
                                className="w-full h-full object-cover"
                                fill
                            />
                        </div>
                    </SheetTrigger>
                    <SheetContent side="right" className="flex flex-col gap-4 p-6   md:hidden">
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
                            <ul className=" block md:hidden ">
                                <Select
                                    onValueChange={(value) => {
                                        setLanguage(value);
                                        i18n.changeLanguage(value);
                                    }}
                                    value={language}
                                >
                                    <SelectTrigger className="border border-[#b8b6b6] p-1 font-light rounded focus:border-[#353535] shadow-none text-[#353535] data-[placeholder]:text-[#353535] focus:ring-0 focus:outline-none">
                                        <SelectValue placeholder="English" />
                                    </SelectTrigger>
                                    <SelectContent className="text-[#353535]">
                                        {optionsforLanguages.map((lan) => (
                                            <SelectItem
                                                key={lan.value}
                                                value={lan.value}
                                                className="text-[#353535] font-medium focus:bg-gray-100"
                                            >
                                                {lan.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                            </ul>
                        </nav>
                    </SheetContent>
                </Sheet>

            </ul>
        </header>
    );
}