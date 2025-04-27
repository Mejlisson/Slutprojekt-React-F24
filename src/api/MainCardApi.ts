import API_KEY from "./apiKey";

export async function fetchMainComic() {
    const url = `/api/search/?api_key=${API_KEY}&format=json&query=issue`;

    const response = await fetch(url);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.results.length);
    return data.results[randomIndex];
}