import React from 'react'
import { useRouter } from 'next/router';
import Pageloading from '@/components/Pageloading';
import DishId from '@/components/Explore/DishId';

export default function Dish() {
    const router = useRouter();
    const { id: dishId } = router.query;

    if (!dishId || typeof dishId !== 'string') {
        return <Pageloading />;
    }

    console.log("Dish ID:", dishId);
    return (
        <DishId dishId={dishId} />
    )
}
