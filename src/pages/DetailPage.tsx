import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetail } from "../api/fetch/detailApi";
import { FavoriteItem } from "../types/comicApiType";
import FavoriteButton from "../components/buttons/FavoritButton";
import RatingButton from "../components/buttons/RatingButton";
import { ComicApiItem } from "../types/comicApiType";
import AddMoreModal from "../components/modal/AddMoreModal";


export default function DetailPage() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const resource = searchParams.get("resource");

    const [data, setData] = useState<ComicApiItem | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    const [showFullText, setShowFullText] = useState(false);
    const [showModal, setShowModal] = useState(false);

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
        <div className="max-w-5xl mx-auto p-6 mt-28 bg-[#fffbea] border-4 border-black shadow-[10px_8px_0px_black] ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* Bild */}
                <div className="flex justify-center">
                    {favoriteItem.image && (
                        <img
                            src={favoriteItem.image}
                            alt={favoriteItem.name}
                            className="w-[300px] md:w-[350px] shadow-lg border-4 border-black"
                        />
                    )}
                </div>

                {/* Text och info */}
                <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                        <div className="flex flex-col gap-1">
                            <div className="flex gap-2 text-xs font-bold uppercase">
                                {data.volume?.name && <span className="bg-black text-white px-2 py-1 rounded">{data.volume.name}</span>}
                                {data.publisher?.name && <span className="bg-black text-white px-2 py-1 rounded">{data.publisher.name}</span>}
                            </div>
                            <h1 className="text-3xl md:text-4xl font-bold text-black comic-font">
                                {favoriteItem.name}
                            </h1>
                            {data.cover_date && (
                                <p className="text-sm text-gray-500">{new Date(data.cover_date).toDateString()}</p>
                            )}
                        </div>

                        {/* Favoritknapp */}
                        <div className="mt-1">
                            <FavoriteButton item={favoriteItem} />
                        </div>
                    </div>

                    {/* Knapp-grupp */}
                    <div className="flex flex-col gap-2 mt-2">
                        <RatingButton item={favoriteItem} />
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-yellow-400 hover:bg-yellow-500 text-black px-3 py-1 border-2 border-black shadow-[4px_4px_0px_black] text-sm w-fit"
                        >
                            Add more
                        </button>
                        {data.description && (
                            <button
                                onClick={() => setShowFullText(!showFullText)}
                                className="bg-pink-500 hover:bg-pink-400 px-4 py-1 border-2 border-black shadow-[4px_4px_0px_black] text-xs w-fit"
                            >
                                {showFullText ? "Read less" : "Read more..."}
                            </button>
                        )}
                    </div>
                    {/* Beskrivning */}
                    <div className={`overflow-hidden transition-all duration-700 ease-in-out ${showFullText ? "max-h-full" : "max-h-[180px]"}`}>
                        {data.description ? (
                            <div
                                className="text-sm md:text-base text-gray-800"
                                dangerouslySetInnerHTML={{ __html: data.description }}
                            />
                        ) : (
                            <p className="italic text-gray-400">No description available.</p>
                        )}
                    </div>
                </div>
            </div>

            {showModal && (
                <AddMoreModal item={favoriteItem} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
}