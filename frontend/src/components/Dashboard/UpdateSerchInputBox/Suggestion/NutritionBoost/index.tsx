import React, { useEffect, useRef } from 'react'
import { NutritionBoostOptions } from "../../../../../utils"
import style from "./NutritionBoost.module.scss"
import type { SuggestionsActiveType } from "../../../../../types"
import { useClickOutside } from "../../../../../hooks/useClickOutside"

type Props = {
    setSuggestionsActive: React.Dispatch<React.SetStateAction<SuggestionsActiveType>>;
};
const NutritionBoost: React.FC<Props> = ({ setSuggestionsActive }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useClickOutside(modalRef, () => {
        setSuggestionsActive((prev) => ({ ...prev, NutritionBoost: false }))
    })
    return (
        <div className={style.NutritionBoostSuggestion}>
            {NutritionBoostOptions.map((option) => <div ref={modalRef} key={option.label} className={style.option} >
                {option.label}
            </div>)}
        </div>
    )
}

export default NutritionBoost