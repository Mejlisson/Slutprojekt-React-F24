import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ComicApiItem } from "../components/homepage/MainCard";
import { fetchDetail } from "../api/fetch/detailApi";
import { FavoriteItem } from "../context/contextTypes";
import FavoriteButton from "../components/buttons/FavoritButton";

export default function DetailPage() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const resource = searchParams.get("resource");

    const [data, setData] = useState<ComicApiItem | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [showFullText, setShowFullText] = useState(false);

    useEffect(() => {
        if (!id || !resource) {
            setError("Missing ID or resource.");
            setLoading(false);
            return;
        }

        const getData = async () => {
            try {
                const result = await fetchDetail(resource, id);
                setData(result);
            } catch (err) {
                console.error("Error fetching details:", err);
                setError("Failed to fetch details.");
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, [id, resource]);

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen">
                <img src="/loading.gif" alt="Loading..." className="w-24 h-24" />
            </div>
        );

    if (error)
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-red-500 text-xl">{error}</p>
            </div>
        );

    if (!data)
        return (
            <div className="flex justify-center items-center h-screen">
                <p className="text-gray-500 text-xl">No data found.</p>
            </div>
        );

    const favoriteItem: FavoriteItem = {
        id: data.id,
        name: data.name || data.volume?.name || data.title || "Unknown",
        image: data.image?.super_url || "",
        resource_type: resource || "unknown",
    };

    return (
        <div className="max-w-2xl mx-auto p-6 mt-28">
            <h1 className="text-2xl font-bold mb-4 flex flex-col items-center">
                {favoriteItem.name}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {/*favoritknapp */}
                <div className="flex flex-col">
                    {favoriteItem.image && (
                        <img
                            src={favoriteItem.image}
                            alt={favoriteItem.name}
                            className="w-full rounded shadow mb-3"
                        />
                    )}
                    <FavoriteButton item={favoriteItem} className="mt-2" />
                </div>

                {/* Text + Läs mer-knapp */}
                <div className="flex flex-col">
                    {/* Toggle button */}
                    {data.description && (
                        <button
                            onClick={() => setShowFullText(!showFullText)}
                            className="mb-2 self-start bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded text-sm font-semibold"
                        >
                            {showFullText ? "Visa mindre" : "Läs mer"}
                        </button>
                    )}

                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${showFullText ? "max-h-full" : "max-h-[476px]"}`}>
                        {data.description ? (
                            <div
                                className="text-gray-700"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />
                        ) : (
                            <p className="italic text-gray-400">No description available.</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}