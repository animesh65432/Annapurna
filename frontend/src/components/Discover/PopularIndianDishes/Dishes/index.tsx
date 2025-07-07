import type { popularindianFoodstypes } from "../../../../types";
import styles from "./Dishes.module.scss"


type Props = {
    food: popularindianFoodstypes
}


export default function Dishes({ food }: Props) {
    return (
        <div className={styles.dishContainer}>
            <img src={food.img} />
            <div className={styles.overlay}></div>
            <p className={styles.foodname}>{food.name},{food.state}</p>
        </div>
    );
}