import API_KEY from "../utils/apiKey";


export async function fetchMainComic() {
    const url = `/api/search/?api_key=${API_KEY}&format=json&query=issue`;

    const response = await fetch(url);
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.results.length);
    return data.results[randomIndex];
}

//Denna funktion används för att hämta en slumpmässig comic från API:et.
//Jag använder fetch för att hämta datan och returnerar den i slutet av funktionen.
// Jag använder också format=json för att få datan i JSON-format.
// Jag använder också en randomIndex för att hämta en slumpmässig comic från resultatet.
// Jag returnerar den slumpmässiga comicen i slutet av funktionen.