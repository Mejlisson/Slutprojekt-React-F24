import { ComicApiItem } from "../components/homepage/MainCard";
import API_KEY from "./apiKey";

export async function fetchDetail(resource: string, id: string): Promise<ComicApiItem> {
    const url = `/api/${resource}/${id}.json?api_key=${API_KEY}&format=json`;
    console.log("Fetching detail:");
    console.log("URL:", url);

    const response = await fetch(url);
    const data = await response.json();
    console.log("API Response:", data);

    if (!response.ok) {
        console.error("Fetch failed:", response.statusText);
        throw new Error("Fetch failed");
    }

    if (!data.results) {
        console.warn("No API response.");
    }
    return data.results;
}