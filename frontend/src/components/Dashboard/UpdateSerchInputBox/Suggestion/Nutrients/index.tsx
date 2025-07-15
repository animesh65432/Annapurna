import React, { useState, useEffect, useRef } from 'react'
import { micronutrientIcons } from "../../../../../utils"
import styles from "./Nutrients.module.scss"
import { Search } from "lucide-react";
import type { SuggestionsActiveType } from "../../../../../types"

type Props = {
    setSuggestionsActive: React.Dispatch<React.SetStateAction<SuggestionsActiveType>>;
};

const Nutrients: React.FC<Props> = ({ setSuggestionsActive }) => {
    const [Filtermicronutrients, setFilterMicronutrients] = useState(micronutrientIcons)
    const modalRef = useRef<HTMLDivElement>(null)
    const onChangeNutrient = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value.toLowerCase();
        const filtered = micronutrientIcons.filter((micronutrient) =>
            micronutrient.key.toLowerCase().includes(keyword)
        );
        setFilterMicronutrients(filtered);
    };
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                console.log("clicked")
                setSuggestionsActive((prev) => ({ ...prev, Nutrients: false }))
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

    return (
        <div className={styles.NutrientsContainer} ref={modalRef}>
            <div className={styles.NutrientsSerchboxContainer}>
                <div className={styles.InputWithIcon}>
                    <input onChange={onChangeNutrient} className={styles.NutrientsSerchbox} ></input>
                    <Search className={styles.SerchIcon} />
                </div>
            </div>
            <div className={styles.NutrientList}>
                {Filtermicronutrients.map((micronutrient) => <div className={styles.Nutrient} key={micronutrient.key}>
                    {micronutrient.label}
                </div>)}
            </div>
        </div>
    )
}

export default Nutrients