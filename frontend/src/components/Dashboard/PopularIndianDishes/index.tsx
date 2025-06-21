import { useState, useEffect } from "react";
import { popularindianFoods } from "../../../utils";
import styles from "./PopularIndianDishes.module.scss";
import Dishes from "./Dishes"
export default function PopularIndianDishes() {
    const [index, setIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);


    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth <= 768) {
                setItemsPerPage(1);
            } else {
                setItemsPerPage(2);
            }
        };

        updateItemsPerPage()
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, []);

    const getItems = (start: number) => {
        return popularindianFoods.slice(start, start + itemsPerPage);
    };

    const handleNext = () => {
        if (index + itemsPerPage < popularindianFoods.length) {
            setIndex(prev => prev + itemsPerPage);
        }
        else {
            setIndex(0)
        }
    };

    const handlePrev = () => {
        if (index - itemsPerPage >= 0) {
            setIndex(prev => prev - itemsPerPage);
        }
        else {
            setIndex(Math.max(popularindianFoods.length - itemsPerPage, 0));
        }
    };

    const filterpopularindianFoods = getItems(index);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Popular Indian Dishes</h1>
                <p className={styles.subtitle}>Discover the rich flavors of authentic Indian cuisine</p>
            </div>
            <div>
                <div></div>
                <div className={styles.dishesContainer}>
                    {filterpopularindianFoods.map((food) => (
                        <Dishes key={food.name} name={food.name} img={food.img} />
                    ))}
                </div>
                <div></div>
            </div>
        </div>
    );
}
