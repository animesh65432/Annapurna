import React, { useEffect, useRef } from 'react'
import { NutritionBoostOptions } from "../../../../../utils"
import style from "./NutritionBoost.module.scss"
import type { SuggestionsActiveType } from "../../../../../types"

type Props = {
    setSuggestionsActive: React.Dispatch<React.SetStateAction<SuggestionsActiveType>>;
};
const NutritionBoost: React.FC<Props> = ({ setSuggestionsActive }) => {
    const modalRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                console.log("clicked")
                setSuggestionsActive((prev) => ({ ...prev, NutritionBoost: false }))
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])
    return (
        <div className={style.NutritionBoostSuggestion}>
            {NutritionBoostOptions.map((option) => <div ref={modalRef} key={option.label} className={style.option} >
                {option.label}
            </div>)}
        </div>
    )
}

export default NutritionBoost