import Header from "@/components/Header";
import SearchinInputBox from "./SearchinInputBox";
import Nonvegetarian from "./NonVeg";
import Veg from "./Veg";
import MobileSearch from "./MobileSearch";
import HighNonvegetarian from "./HighProteinNonvegetarian";
import HighVegetarian from "./HighProteinVegetarian";
import Diabetic_Friendly from "./Diabetic_Friendly";
import Eggetarian from "./Eggetarian";
import Gluten_Free from "./Gluten_Free";
import { useHasMounted } from "@/hooks/useHasMounted";

export default function ExploreComponent() {
    const hasmuted = useHasMounted()

    if (!hasmuted) {
        return null
    }
    return (
        <div className="bg-[url('/dashboard/backgroundimage.png')] flex min-h-dvh overflow-y-auto w-full flex-col gap-10 lg:gap-8 pt-[220px]">
            <div className="flex flex-col gap-6 md:gap-10 fixed top-0 left-0 right-0 z-50 bg-slate-50 p-5">
                <Header />
                <SearchinInputBox />
                <MobileSearch />
            </div>
            <Nonvegetarian />
            <HighNonvegetarian />
            <Veg />
            <HighVegetarian />
            <Eggetarian />
            <Diabetic_Friendly />
            <Gluten_Free />
        </div>
    );
}
