const API_KEY = "a6a35331837c8797a2a76f29acffb53fea43710f";

export async function fetchMainComic() {
    const url = `/api/search/?api_key=${API_KEY}&format=json&query=issue`;

    const response = await fetch(url);

    const data = await response.json();
    console.log(data);

    const randomIndex = Math.floor(Math.random() * data.results.length);
    return data.results[randomIndex];
}