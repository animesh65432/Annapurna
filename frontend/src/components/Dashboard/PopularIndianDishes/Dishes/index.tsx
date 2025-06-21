import styles from "./Dishes.module.scss";


type Props = {
    name: string;
    img: string;
}

export default function Dishes({ name, img }: Props) {
    return (
        <div className={styles.dishCard}>
            <div className={styles.imageContainer}>
                <img
                    src={img}
                    alt={name}
                    className={styles.dishImage}
                />
                <div className={styles.overlay}>
                    <span className={styles.viewRecipe}>View Recipe</span>
                </div>
            </div>
            <div className={styles.dishInfo}>
                <h3 className={styles.dishName}>{name}</h3>
            </div>
        </div>
    );
}