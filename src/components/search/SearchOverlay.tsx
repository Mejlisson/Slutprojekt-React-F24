import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";
import { searchComicVine } from "../../api/searchApi";

export default function SearchOverlay() {
    const { showSearch, setShowSearch } = useSearch();
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    if (!showSearch) return null;

    const handleSearch = async () => {
        if (!query.trim()) return;
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
        <div className="fixed inset-0 z-50 bg-gray-300 bg-opacity-10 flex items-center justify-center">
            <div
                className="relative w-[600px] h-[400px] rounded shadow-xl bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center gap-4 p-4">
                {/* Input */}
                <div className="bg-white rounded-full shadow-md flex items-center p-2 px-4 w-full">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for comics, characters, creators..."
                        className="flex-1 outline-none text-sm p-2"
                    />
                    <button onClick={handleSearch} className="ml-2 cursor-pointer scale-200 transition-transform">
                        <img src="/search-icon.png" alt="Search" className="h-5 w-5" />
                    </button>
                </div>

                {loading && (
                    <div className="flex justify-center items-center mt-4">
                        <img src="/searchLoading.gif" alt="Loading..." className="h-60 w-60" />
                    </div>
                )}


                {error && <p className="text-red-500">{error}</p>}


                <ul className="rounded p-3 w-full h-[300px] overflow-y-auto space-y-[1px]">
                    {searchResults.map((result: any, index: number) => (
                        <li key={index} className="bg-white">
                            <Link
                                to={`/details/${result.id}?resource=${result.resource_type}`}
                                onClick={() => setShowSearch(false)}
                                className="flex items-center gap-4 rounded hover:bg-yellow-100 transition p-2"
                            >
                                <img
                                    src={result.image?.icon_url || "/default-thumbnail.jpg"}
                                    alt={result.name}
                                    className="h-12 w-12 object-cover border"
                                />
                                <div className="text-black font-medium">
                                    <p>{result.name || result.title || "No name"}</p>
                                    <p className="text-xs text-gray-500">{result.resource_type}</p>
                                </div>
                            </Link>
                        </li>
                    ))}

                </ul>
                <button
                    onClick={() => setShowSearch(false)}
                    className="absolute -top-3 right-0 text-red-500 text-2xl cursor-pointer transition-transform hover:font-bold animate-pulse"
                >
                    ✕
                </button>
            </div>
        </div >
    );
}