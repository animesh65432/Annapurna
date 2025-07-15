import React, { useRef } from 'react'
import { DishType } from "../../../../../utils"
import styles from "./Dish.module.scss"
import { useClickOutside } from "../../../../../hooks/useClickOutside"
import type { SuggestionsActiveType } from '../../../../../types';

type Props = {
    setSuggestionsActive: React.Dispatch<React.SetStateAction<SuggestionsActiveType>>;
};


const Dish: React.FC<Props> = ({ setSuggestionsActive }) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useClickOutside(modalRef, () => {
        console.log("clicked outside");
        setSuggestionsActive((prev) => ({ ...prev, DietType: false }));
    });
    return (
        <div className={styles.dishContainer} ref={modalRef}>
            {
                DishType.map((dish) =>
                    <div key={dish.label} className={styles.dish}>
                        {dish.label}
                    </div>)
            }
        </div>
    )
}

export default Dish