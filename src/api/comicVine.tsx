//const API_KEY = "";
const BASE_URL = "https://comicvine.gamespot.com/api";

export async function fetchMainComic() {
    const url = `${BASE_URL}/search/?api_key=${API_KEY}&format=json&query=wolverine&resources=volume&limit=10&sort=start_year:desc`;

    const response = await fetch(url);

    const data = await response.json();

    const randomIndex = Math.floor(Math.random() * data.results.length);
    return data.results[randomIndex];
}