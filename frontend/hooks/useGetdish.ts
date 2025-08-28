import { useState } from "react"
import axios from "axios";
import { dishTypes } from "@/types"
import { toast } from "react-toastify";
import { config } from "@/config"
import { useTranslation } from "react-i18next";


export function useGetdish() {
    const [dish, setDish] = useState<dishTypes | null>(null);
    const [IsLoading, setIsLoading] = useState(true);
    const { i18n } = useTranslation()


    const GetDish = async (id: string) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${config.EXPLORE_API_URL}/GetDish?id=${id}&lan=${i18n.language}`) as { data: dishTypes };
            setDish(response.data);
        } catch (error) {
            console.error('Error fetching dish:', error);
            toast.error("Error fetching dish. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        dish, IsLoading, GetDish
    }
}
