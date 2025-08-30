import { useState } from "react";
import axios from "axios";
import { config } from "@/config";
import { useTranslation } from "react-i18next"

export function useExploreSuggestions() {
    const [suggestions, setSuggestions] = useState<{ name: string }[]>([]);
    const { i18n } = useTranslation();

    const fetchSuggestions = async (dish: string) => {
        try {
            const response = await axios.get(`${config.EXPLORE_API_URL}/GetSuggestions?q=${dish}&lan=${i18n.language}`);
            setSuggestions(response.data);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    return { suggestions, fetchSuggestions, setSuggestions };
}
