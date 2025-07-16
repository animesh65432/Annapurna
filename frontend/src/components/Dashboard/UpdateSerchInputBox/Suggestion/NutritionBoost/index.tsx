import React, { useRef } from 'react'
import { NutritionBoostOptions } from "../../../../../utils"
import style from "./NutritionBoost.module.scss"
import type { SuggestionsActiveType } from "../../../../../types"
import { useClickOutside } from "../../../../../hooks/useClickOutside"
import { type UseFormSetValue } from "react-hook-form"
import type { RecipeFromTypes } from "../../index"

type Props = {
    setSuggestionsActive: React.Dispatch<React.SetStateAction<SuggestionsActiveType>>;
    setValue: UseFormSetValue<RecipeFromTypes>
};
const NutritionBoost: React.FC<Props> = ({ setSuggestionsActive, setValue }) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useClickOutside(modalRef, () => {
        setSuggestionsActive((prev) => ({ ...prev, NutritionBoost: false }))
    })
    return (
        <div className={style.NutritionBoostSuggestion} ref={modalRef}>
            {NutritionBoostOptions.map((option) => <div key={option.label} className={style.option} onClick={() => setValue("variant", option.key, { shouldValidate: true })} >
                {option.label}
            </div>)
            }
        </div >
    )
}

export default NutritionBoost