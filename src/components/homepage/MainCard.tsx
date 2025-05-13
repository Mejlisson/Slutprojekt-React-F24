import { useEffect, useState } from "react";
import { fetchMainComic } from "../../api/fetch/MainCardApi";
import SeeMoreButton from "../buttons/SeeMoreButton";
import { ComicApiItem } from "../../types/comicApiType";

export default function MainCard() {
    const [comic, setComic] = useState<ComicApiItem | null>(null);

    useEffect(() => {
        fetchMainComic()
            .then(setComic)
            .catch((error) => console.error("Failed to fetch main comic:", error));
    }, []);

    if (!comic) {
        return (
            <div className="flex justify-center items-center py-16">
                <img src="/loading.gif" alt="Loading..." className="w-16 h-16" />
            </div>
        );
    }

    return (
        <section className="bg-[#fff] py-10 px-4 md:px-18 border-4 border-black shadow-[6px_4px_0px_black]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase text-red-600 mb-6 sm:mb-8 ml-2 sm:ml-4 md:ml-0">
                Popular Comics
            </h2>


            <div className="grid md:grid-cols-2 gap-8 border-4 border-black bg-yellow-100 shadow-[6px_4px_0px_black] p-6">
                <img
                    src={comic.image?.super_url}
                    alt={comic.name}
                    className="w-full h-auto object-cover rounded shadow"
                />

                <div className="text-black">
                    <span className="text-xs uppercase bg-black text-white px-2 py-1 rounded">
                        {comic.volume?.name}
                    </span>
                    <h3 className="text-2xl font-bold mt-20 mb-3">{comic.name}</h3>
                    <p className="text-s text-gray-800 leading-relaxed line-clamp-5 ">
                        {comic.description
                            ? comic.description.replace(/<[^>]+>/g, "")
                            : "No description available."}
                    </p>

                    <div className="mt-6">
                        <SeeMoreButton id={comic.id} resource="issue" />
                    </div>
                </div>
            </div>
        </section>
    );
}