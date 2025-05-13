import { useRef } from "react";
import { useFetchComicData } from "../../api/fetch/useFetchComicData";
import { ComicApiItem } from "../../types/contextTypes";
import SeeMoreButton from "../buttons/SeeMoreButton";

export default function PopularMovie() {
    const { data: movies, loading, error } = useFetchComicData<ComicApiItem>("movies", 15);
    const scrollRef = useRef<HTMLDivElement>(null);

    const handleScroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <section className="bg-white py-10  relative">
            <h2 className="ml-22 text-5xl font-extrabold uppercase text-red-600 mb-6">
                Top Movies
            </h2>
            {
                loading && (
                    <div className="flex justify-center items-center py-10">
                        <img src="/loading.gif" alt="Loading..." className="w-16 h-16" />
                    </div>
                )
            }
            {error && <p className="text-red-600 text-center">{error}</p>}

            {/*scroll wrapper*/}
            <div className="relative">

                {/*left*/}
                <button
                    onClick={() => handleScroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 border border-black hover:scale-110 transition hover:bg-yellow-300"
                >
                    <img src="/left.png" alt="Scroll Left" className="w-8 h-8" />
                </button>

                {/*right*/}
                <button
                    onClick={() => handleScroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 border border-black hover:scale-110 transition hover:bg-yellow-300"
                >
                    <img src="/right.png" alt="Scroll Right" className="w-8 h-8" />
                </button>

                {/* Scrollable card */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto space-x-5 pb-2 px-10"
                >
                    {movies.map((movie) => (
                        <div
                            key={movie.id}
                            className="man-w-[180px] flex-shrink-0 border-4 border-black shadow-[4px_4px_0px_black] bg-yellow-300 p-2 text-center relative hover:scale-103 transition-transform duration-300"
                        >
                            <img
                                src={movie.image?.super_url}
                                alt={movie.name}
                                className="w-full h-64 object-cover rounded mb-2"
                            />
                            <h3 className="text-sm font-bold text-black mb-1">
                                {movie.name || movie.volume?.name}
                            </h3>
                            <SeeMoreButton id={movie.id} resource="movie" />
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
}
//useRef för att referera till scrollbar, och useFetchComicData för att hämta data från API.