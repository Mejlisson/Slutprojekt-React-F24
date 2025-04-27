import { useEffect, useState } from "react";
import { fetchMainComic } from "../../api/MainCardAPI";

type ComicApiItem = {
    image?: {
        super_url?: string; //Main image of the series
    };
    volume?: {
        name?: string;  //Name of the series
    };
    description?: string; //Brief summary of the series
};

export default function MainCard() {
    const [comic, setComic] = useState<ComicApiItem | null>(null);

    useEffect(() => {
        const getComic = async () => {
            try {
                const data: ComicApiItem = await fetchMainComic();

                if (data.image?.super_url && data.volume?.name) {
                    setComic(data);
                } else {
                    console.warn("Saknar img eller namn:", data);
                }
            } catch (error) {
                console.error("Fel vid hämtning:", error);
            }
        };

        getComic();
    }, []);

    //Loading Batman
    if (!comic) {
        return (
            <div className="flex justify-center items-center h-[150px]">
                <img src="/loading.gif" alt="Loading..." className="w-20 h-20" />
            </div>
        );
    }

    return (
        <div className="">
            <div className="bg-gray-300  p-6 flex gap-6 items-start">
                <img
                    src={comic.image?.super_url}
                    alt={comic.volume?.name}
                    className="w-48 rounded shadow-xl object-contain"
                />
                <div className="flex flex-col">
                    <h2 className="text-5xl   text-black font-bold">{comic.volume?.name}</h2>
                    <p
                        className="mt-2 text-sm text-black"
                        dangerouslySetInnerHTML={{
                            __html: comic.description || "<em>Ingen beskrivning tillgänglig.</em>",
                        }}
                    />
                </div>
            </div>
        </div>
    );

}