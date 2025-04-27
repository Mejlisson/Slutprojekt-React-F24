import { useState } from "react";
import { useSearch } from "../../context/SearchContext";
import { searchComicVine } from "../../api/searchComicVine";

export default function SearchOverlay() {
    const { showSearch, setShowSearch } = useSearch(); // hämtar global state från SearchContext
    const [query, setQuery] = useState("");             // sparar det user söker på
    const [searchResults, setSearchResults] = useState([]); // sparar sökresultat
    const [loading, setLoading] = useState(false);          // visar loading spinner
    const [error, setError] = useState("");                 // hanterar felmeddelande

    if (!showSearch) return null;

    const handleSearch = async () => {
        if (!query.trim()) return; // Om input är tom gör ingenting

        setLoading(true);
        setError("");
        setSearchResults([]);

        try {
            const results = await searchComicVine(query);
            if (results.length === 0) {
                setError("No results found.");
            } else {
                setSearchResults(results);
            }
        } catch (err) {
            console.error(err);
            setError("Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
            <div
                className="relative w-[90%] max-w-2xl p-6 rounded shadow-xl bg-center bg-cover"
                style={{ backgroundImage: "url('/bg-forSearch.jpg')" }}
            >
                <div className="bg-white rounded-full shadow-md flex items-center p-2 px-4">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for comics, characters, creators..."
                        className="flex-1 outline-none text-sm p-2"
                    />
                    <button onClick={handleSearch} className="ml-2">
                        <img src="/search-icon.png" alt="Search" className="h-5 w-5" />
                    </button>
                </div>

                {/* Stäng overlay */}
                <button
                    onClick={() => setShowSearch(false)}
                    className="absolute top-2 right-2 text-white text-2xl font-bold"
                >
                    ✕
                </button>
            </div>
        </div>
    );
}
