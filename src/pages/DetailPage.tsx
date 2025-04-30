import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ComicApiItem } from "../components/homepage/MainCard";
import { fetchDetail } from "../api/detailAPI";

export default function DetailPage() {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const resource = searchParams.get("resource");

    const [data, setData] = useState<ComicApiItem | null>(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

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

    if (loading) return <p className="p-4">Loading...</p>;
    if (error) return <p className="text-red-500 p-4">{error}</p>;
    if (!data) return <p className="p-4">No data found.</p>;

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">
                {data.volume?.name || data.name || data.title || "No name"}
            </h1>
            {data.image?.super_url && (
                <img
                    src={data.image.super_url}
                    alt={data.name}
                    className="w-full rounded shadow mb-4"
                />
            )}
            {data.description ? (
                <p className="text-gray-700" dangerouslySetInnerHTML={{ __html: data.description }} />
            ) : (
                <p className="italic text-gray-400">No description available.</p>
            )}
        </div>
    );
}