import { useState, useEffect } from "react";
import { popularindianFoods } from "../../../utils";
import styles from "./PopularIndianDishes.module.scss";
import Dishes from "./Dishes";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import type { popularindianFoodstypes } from "../../../types";

export default function PopularIndianDishes() {
    const [index, setIndex] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(2);

    useEffect(() => {
        const updateItemsPerPage = () => {
            if (window.innerWidth > 1200) {
                setItemsPerPage(4)
            }
            else if (window.innerWidth > 768) {
                setItemsPerPage(3);
            } else if (window.innerWidth > 438) {
                setItemsPerPage(2);
            }
            else {
                setItemsPerPage(1)
            }
        };

        updateItemsPerPage();
        window.addEventListener("resize", updateItemsPerPage);

        return () => window.removeEventListener("resize", updateItemsPerPage);
    }, [window.innerWidth]);

    const getItems = (start: number) => {
        let filterpopularindianFoods: popularindianFoodstypes[] = []
        if (start + itemsPerPage > popularindianFoods.length) {
            const remainingItems = popularindianFoods.length - start;
            const itemsToFill = itemsPerPage - remainingItems;
            filterpopularindianFoods = popularindianFoods.slice(start, start + remainingItems)
                .concat(popularindianFoods.slice(0, itemsToFill));
        }
        else if (start < 0) {
            const itemsToFill = Math.abs(start);
            console.log(itemsToFill, "itemsToFill");
            const remainingItems = popularindianFoods.length - itemsToFill;
            console.log(remainingItems, "remainingItems");
            filterpopularindianFoods = popularindianFoods.slice(remainingItems, popularindianFoods.length)
                .concat(popularindianFoods.slice(0, itemsToFill));
        }
        else {
            filterpopularindianFoods = popularindianFoods.slice(start, start + itemsPerPage);
        }
        return filterpopularindianFoods
    };

    const handleNext = () => {
        if (index < popularindianFoods.length - 1) {
            setIndex(prev => prev + 1);
        } else {
            console.log("Reached the end of the list, resetting index to 0");
            setIndex(0);
        }
    };

    const handlePrev = () => {
        if (index > 0) {
            setIndex(prev => prev - 1);
        } else {
            setIndex(popularindianFoods.length - 1);
        }
    };


    const filterpopularindianFoods = getItems(index);
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Popular Indian Dishes</h1>
                <p className={styles.subtitle}>Discover the rich flavors of authentic Indian cuisine</p>
            </div>

            <div className={styles.dishesWrapper}>
                <div>
                    <ArrowBigLeft onClick={handlePrev} className={styles.Icon} />
                </div>

                <div className={styles.dishesContainer}>
                    {filterpopularindianFoods.map((food) => (
                        <Dishes key={food.name} name={food.name} img={food.img} />
                    ))}
                </div>

                <div>
                    <ArrowBigRight onClick={handleNext} className={styles.Icon} />
                </div>
            </div>
        </div>
    );
}
