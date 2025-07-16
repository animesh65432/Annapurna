import React, { useState, useRef } from 'react'
import { micronutrientIcons } from "../../../../../utils"
import styles from "./Nutrients.module.scss"
import { Search } from "lucide-react";
import type { SuggestionsActiveType } from "../../../../../types"
import { useClickOutside } from "../../../../../hooks/useClickOutside"
import type { UseFormSetValue } from 'react-hook-form';
import type { RecipeFromTypes } from '../..';

type Props = {
    setSuggestionsActive: React.Dispatch<React.SetStateAction<SuggestionsActiveType>>;
    setValue: UseFormSetValue<RecipeFromTypes>
};

const Nutrients: React.FC<Props> = ({ setValue, setSuggestionsActive }) => {
    const [Filtermicronutrients, setFilterMicronutrients] = useState(micronutrientIcons)
    const modalRef = useRef<HTMLDivElement>(null)
    const onChangeNutrient = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = micronutrientIcons.filter((micronutrient) =>
            micronutrient.key.toLowerCase().includes(keyword)
        );
        setFilterMicronutrients(filtered);
    };
    useClickOutside(modalRef, () => {
        setSuggestionsActive((prev) => ({ ...prev, Nutrients: false }))
    })
    return (
        <div className={styles.NutrientsContainer} ref={modalRef}>
            <div className={styles.NutrientsSerchboxContainer}>
                <div className={styles.InputWithIcon}>
                    <input onChange={onChangeNutrient} placeholder='Search micronutrients...' className={styles.NutrientsSerchbox} ></input>
                    <Search className={styles.SerchIcon} />
                </div>
            </div>
            <div className={styles.NutrientList}>
                {Filtermicronutrients.map((micronutrient) => <div className={styles.Nutrient} key={micronutrient.key} onClick={() => setValue("Nutrient", micronutrient.key)}>
                    {micronutrient.label}
                </div>)}
            </div>
        </div>
    )
}

export default Nutrients