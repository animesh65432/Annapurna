import type { popularindianFoodstypes } from "../../../../types";
import styles from "./Dishes.module.scss"
import { useNavigate } from "react-router-dom"
type Props = {
    food: popularindianFoodstypes
}

export default function Dishes({ food }: Props) {
    const navigate = useNavigate()

    const navigatetohome = (dish: string) => {
        navigate("/", { state: dish });
    }
    return (
        <div className={styles.dish} onClick={() => navigatetohome(food.name)}>
            <div className={styles.dishContainer}>
                <img src={food.img} />
                <div className={styles.overlay}></div>
                <p className={styles.foodname}>{food.name}</p>
            </div>
            <div className={styles.foodtitle}>
                <p className={styles.foodname}>{food.name},{food.state}</p>
            </div>
        </div>

    );
}