import Header from "@/components/Header";
import SearchinInputBox from "./SearchinInputBox";
import Nonvegetarian from "./NonVeg";
import SummerDishes from "./SummerDishes";
import Veg from "./Veg";
import WinterDishes from "./WinterDishes";
import MobileSearch from "./MobileSearch";
import ShowResult from "./ShowResult";
import { useExploreContext } from "@/context";

export default function ExploreComponent() {
    const { Isfiltering } = useExploreContext();

    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] flex min-h-dvh overflow-y-auto w-full flex-col gap-10 lg:gap-8 pt-[220px]">
            <div className="flex flex-col gap-6 md:gap-10 fixed top-0 left-0 right-0 z-50 bg-slate-50 p-5">
                <Header />
                <SearchinInputBox />
                <MobileSearch />
            </div>

            {!Isfiltering && <Nonvegetarian />}
            {!Isfiltering && <Veg />}
            {!Isfiltering && <SummerDishes />}
            {!Isfiltering && <WinterDishes />}
            {Isfiltering && <ShowResult />}
        </div>
    );
}
