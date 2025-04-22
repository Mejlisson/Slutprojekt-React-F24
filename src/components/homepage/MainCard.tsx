import { useEffect, useState } from "react";
import { fetchMainComic } from "../../api/comicVine";

type Comic = {
    volume: { name: string; } //Name of the series
    image: { url: string }; //Main image of the series
    description: string; //Brief summary of the series
}

export default function MainCard() {
    const [comic, setComic] = useState<Comic | null>(null);

    useEffect(() => {
        const loadData = async () => {
            const result = await fetchMainComic();
            setComic(result);
        };
        loadData();
    }, []);

    {/*Loading*/ }
    if (!comic) {
        return (
            <div className="flex justify-center items-center h-[150px]">
                <img src="/loading.gif" alt="Loading..." className="w-20 h-20" />
            </div>
        );
    }
    return (
        <div className="bg-black">
            <div className="bg-gray-300 text-black p-6 skew-y-3 text-center">
                <img
                    src={comic.image.url}
                    alt={comic.volume.name}
                    className="mx-auto rounded shadow-xl max-h-96 object-contain"
                />
                <h2 className="text-xl font-bold mt-4">{comic.volume.name}</h2>
                <p className="mt-2 text-sm">{comic.description}</p>
            </div>
        </div>
    );
}
