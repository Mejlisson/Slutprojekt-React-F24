import { useRating } from "../../context/ratingContext";
import { useFavorite } from "../../context/FavoriteContext";

export default function ComicStats() {
    const {
        state: { ratings },
    } = useRating();

    const {
        state: { favorites },
    } = useFavorite();

    const mostLiked = favorites.reduce((top, item) => {
        return !top || (item.name && item.name.length > (top.name?.length || 0)) ? item : top;
    }, null as any);

    return (
        <section className="my-12 px-4">
            <div className="bg-gray-300 border-4 border-black shadow-[4px_6px_0px_black] p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 relative">
                {/* bild */}
                <img
                    src="/stats.png"
                    alt="Comic Stats"
                    className="w-45 h-45 object-contain animate-bounce"
                />

                {/* Text */}
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold mb-4">Your Comic Stats</h2>

                    <p className="text-lg font-semibold mb-2">
                        ⭐ You’ve rated: <span className="font-bold">{ratings.length}</span> comics
                    </p>

                    <p className="text-lg font-semibold mb-2">
                        ❤️ You’ve favorited: <span className="font-bold">{favorites.length}</span> items
                    </p>

                    {mostLiked && (
                        <p className="text-lg mt-4">
                            Most liked character: <span className="font-bold">{mostLiked.name}</span>
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}