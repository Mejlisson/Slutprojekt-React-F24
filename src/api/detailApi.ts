import API_KEY from "./apiKey";

export async function fetchComicDetail(resource: string, id: string) {
    const url = `/api/${resource}/${id}/?api_key=${API_KEY}&format=json`;
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch detail data: " + response.statusText);
    }
    const data = await response.json();
    return data.results;
}