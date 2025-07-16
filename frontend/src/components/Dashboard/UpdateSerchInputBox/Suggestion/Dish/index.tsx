import React, { useRef } from 'react'
import { DishType } from "../../../../../utils"
import styles from "./Dish.module.scss"
import { useClickOutside } from "../../../../../hooks/useClickOutside"
import type { SuggestionsActiveType } from '../../../../../types';
import type { UseFormSetValue } from 'react-hook-form';
import type { RecipeFromTypes } from '../..';

type Props = {
    setSuggestionsActive: React.Dispatch<React.SetStateAction<SuggestionsActiveType>>;
    setValue: UseFormSetValue<RecipeFromTypes>
};


const Dish: React.FC<Props> = ({ setSuggestionsActive, setValue }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(modalRef, () => {
        console.log("clicked outside");
        setSuggestionsActive((prev) => ({ ...prev, DietType: false }));
    });
    return (
        <div className={styles.dishContainer} ref={modalRef}>
            {
                DishType.map((dish) =>
                    <div key={dish.label} className={styles.dish} onClick={() => setValue("DishType", dish.value, { shouldValidate: true })}>
                        {dish.label}
                    </div>)
            }
        </div>
    )
}

export default Dish