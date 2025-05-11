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

//Denna är "custom hook" som gör att flera komponenter kan dela på samma logik för att hämta data.
//Denna hook används för att hämta data från API:et med hjälp av en endpoint och en limit.
//useEffect för att hämta datan när komponenten laddas.
//useState för att lagra datan, loading och error.
//try-catch-sats för att fånga eventuella fel som kan uppstå vid hämtning av data.
//finally-sats för att sätta loading till false när datan har hämtats.
//Denna hook returnerar datan, loading och error så att komponenten kan använda dem.