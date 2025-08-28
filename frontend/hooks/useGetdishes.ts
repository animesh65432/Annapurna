import { dishTypes } from "@/types"
import { useState } from "react";
import axios from "axios";
import { config } from "@/config"
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";

export function useGetdishes() {
    const [dishes, setDishes] = useState<dishTypes[]>([])
    const [IsLoading, setIsLoading] = useState<boolean>(false)
    const [totalItems, setTotalItems] = useState<number>(0)
    const { i18n } = useTranslation();

    const fetchDishes = async (diet?: string, page?: number, limit?: number) => {
        setIsLoading(true)
        try {
            const response = await axios.get(`${config.EXPLORE_API_URL}/GetDietTypeDishes?diet=${diet ? diet : "Vegetarian"}&page=${page || 0}&limit=${limit || 30}&lan=${i18n.language}`) as { data: { dishes: dishTypes[], totalItems: number } }
            setDishes(response.data.dishes)
            setTotalItems(response.data.totalItems)
        } catch (error) {
            toast.error("Error fetching dishes. Please try again later.")
            console.error("Error fetching dishes:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return { dishes, IsLoading, totalItems, fetchDishes }
}
