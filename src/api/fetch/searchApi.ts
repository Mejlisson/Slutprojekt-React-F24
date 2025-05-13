import API_KEY from "../utils/apiKey";

export async function searchComicVine(query: string) {
    const url = `/api/search/?api_key=${API_KEY}&format=json&query=${query}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Sök error: " + response.statusText);
    }

    const data = await response.json();
    return data.results;
}