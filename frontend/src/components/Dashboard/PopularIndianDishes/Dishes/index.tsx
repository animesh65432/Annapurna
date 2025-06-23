import styles from "./Dishes.module.scss";
import { motion } from "framer-motion"

type Props = {
    name: string;
    img: string;
    selectfromPopularIndianDishes: (dish: string) => void
}


export default function Dishes({ name, img, selectfromPopularIndianDishes }: Props) {
    return (
        <motion.div
            className={styles.dishCard}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }} onClick={() => selectfromPopularIndianDishes(name)}>
            <div className={styles.imageContainer}>
                <img
                    src={img}
                    alt={name}
                    className={styles.dishImage}
                />
            </div>
            <div className={styles.dishInfo}>
                <h3 className={styles.dishName}>{name}</h3>
            </div>
        </motion.div>
    );
}