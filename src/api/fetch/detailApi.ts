
import { ComicApiItem } from "../../types/comicApiType";
import API_KEY from "../utils/apiKey";
import { getPrefixForResourceType } from "../utils/PrefixForApiFetch";

export async function fetchDetail(resourceType: string, id: string): Promise<ComicApiItem> {
    console.log("Resource type:", resourceType, "ID:", id);

    const prefix = getPrefixForResourceType(resourceType);
    const url = `/api/${resourceType}/${prefix}-${id}/?api_key=${API_KEY}&format=json`;
    console.log("Fetching detail from URL:", url);

    const response = await fetch(url);
    const data = await response.json();

    if (!response.ok) {
        console.error("Fetch failed:", response.statusText);
        throw new Error("Fetch failed");
    }
    if (!data.results) {
        console.warn("No API response.");
    }
    return data.results;
}