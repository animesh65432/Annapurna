import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { indianDishes } from "@/lib/Herosectiondata";

type DishType = (typeof indianDishes)[number];

interface ExploreContextType {
    Isfiltering: boolean;
    setIsfiltering: (value: boolean) => void;
    dish: DishType[];
    setdish: (dish: DishType[]) => void;
}
const ExploreContext = createContext<ExploreContextType | undefined>(undefined);

export const ExploreProvider = ({ children }: { children: ReactNode }) => {
    const [Isfiltering, setIsfiltering] = useState(false);
    const [dish, setdish] = useState<DishType[]>(indianDishes);
    return (
        <ExploreContext.Provider value={{ Isfiltering, setIsfiltering, dish, setdish }
        }>
            {children}
        </ExploreContext.Provider>
    );
}
export const useExploreContext = () => {
    const context = useContext(ExploreContext);
    if (!context) {
        throw new Error("useExploreContext must be used within an ExploreProvider");
    }
    return context;
};
