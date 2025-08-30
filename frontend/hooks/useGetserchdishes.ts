import { useState } from 'react';
import { config } from "@/config"
import axios from 'axios';
import { dishTypes } from '@/types';
import { useTranslation } from "react-i18next"

export function useGetserchbydishes() {
    const [dishes, setDishes] = useState<dishTypes[]>([]);
    const [IsLoading, setIsLoading] = useState(true);
    const [totalItems, setTotalItems] = useState(0);
    const { i18n } = useTranslation()

    const SerchDishes = async (diet?: string, page = 0, limit = 30, cuisine?: string, q?: string) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${config.EXPLORE_API_URL}/searchDishes?${diet ? `diet=${diet}&` : ''}${cuisine ? `cuisine=${cuisine}&` : ''}page=${page}&limit=${limit}${q ? `&q=${q}` : ''} ${page ? `&page=${page}` : ``}&lan=${i18n.language}`) as { data: { dishes: dishTypes[], totalItems: number } }
            console.log(response)
            console.log(`${config.EXPLORE_API_URL}/searchDishes?${diet ? `diet=${diet}&` : ''}${cuisine ? `cuisine=${cuisine}&` : ''}page=${page}&limit=${limit}${q ? `&q=${q}` : ''} ${page ? `&page=${page}` : ``}&lan=${i18n.language}`)
            setDishes(response.data.dishes);
            setTotalItems(response.data.totalItems);
        } catch (error) {
            console.error('Error fetching dishes:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        dishes, IsLoading, totalItems, SerchDishes

    }
}
