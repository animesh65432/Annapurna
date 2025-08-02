import { useState } from "react";
import axios from "axios";
import { config } from "@/config";

export function useExploreSuggestions() {
    const [suggestions, setSuggestions] = useState<{ name: string }[]>([]);

    const fetchSuggestions = async (dish: string) => {
        try {
            const response = await axios.get(`${config.EXPLORE_API_URL}/GetSuggestions?q=${dish}`);
            setSuggestions(response.data);
        } catch (error) {
            console.error("Error fetching suggestions:", error);
        }
    };

    return { suggestions, fetchSuggestions, setSuggestions };
}
