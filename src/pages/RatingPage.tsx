import { useState } from "react";
import EntityCard from "../components/layout/EntityCard";
import { useRating } from "../context/ratingContext";

export default function RatingPage() {
    const { state, dispatch } = useRating();
    const ratings = state.ratings;

    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

    const sortedRatings = [...ratings].sort((a, b) => {
        return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating;
    });

    const totalRated = ratings.filter(r => r.rating > 0);
    const avgRating =
        totalRated.length > 0
            ? (totalRated.reduce((sum, r) => sum + r.rating, 0) / totalRated.length).toFixed(1)
            : "0";

    return (
        <div className="min-h-screen bg-comic-pattern p-4 text-left mt-35 ml-18">
            {/* Titel + genomsnitt + filter */}
            <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2">
                    YOUR RATINGS
                </h1>

                <span className="text-md text-black mr-18 font-semibold bg-pink-500 border-4 border-black shadow-[4px_4px_0px_black] p-2 text-center [backface-visibility:hidden] transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1">
                    Average rating: {avgRating} / 5
                </span>

                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as "asc" | "desc")}
                    className="mr-19 font-bangers text-lg text-black bg-yellow-300 border-4 border-black shadow-[4px_4px_0px_black] px-4 py-2 cursor-pointer"
                >
                    <option value="desc">Highest → Lowest</option>
                    <option value="asc">Lowest → Highest</option>
                </select>
            </div>

            {ratings.length === 0 ? (
                <p className="text-red-600 mt-4">No ratings yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px]">
                    {sortedRatings.map((item) => (
                        <EntityCard
                            key={item.id}
                            item={item}
                            type="rating"
                            onRemove={() =>
                                dispatch({ type: "REMOVE_RATING", payload: item.id })
                            }
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
