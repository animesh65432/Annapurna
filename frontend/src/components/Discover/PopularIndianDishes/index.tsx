import { popularindianFoods } from "../../../utils";
import styles from "./PopularIndianDishes.module.scss";
import Dishes from "./Dishes";

export default function PopularIndianDishes() {

    return (
        <div className={styles.container}>
            {
                popularindianFoods.map((food) => <Dishes food={food} key={food.name} />)
            }
        </div>
    );
}
