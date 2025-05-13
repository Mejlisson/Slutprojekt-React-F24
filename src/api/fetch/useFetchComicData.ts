import { useEffect, useState } from "react";
import API_KEY from "../utils/apiKey";
import { ComicApiItem } from "../../types/contextTypes";

export function useFetchComicData<T = ComicApiItem>(endpoint: string, limit = 6) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `/api/${endpoint}/?api_key=${API_KEY}&format=json&limit=${limit}`
                );
                const json = await response.json();
                setData(json.results || []);
            } catch (err) {
                console.error("Fetch error:", err);
                setError("Failed to load data.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [endpoint, limit]);

    return { data, loading, error };
}