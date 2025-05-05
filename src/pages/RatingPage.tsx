import EntityCard from "../components/layout/EntityCard";
import { useRating } from "../context/RatingContext";


export default function RatingPage() {
    const { state, dispatch } = useRating();
    const ratings = state.ratings;

    const totalRated = ratings.filter(r => r.rating > 0);
    const avgRating =
        totalRated.length > 0
            ? (totalRated.reduce((sum, r) => sum + r.rating, 0) / totalRated.length).toFixed(1)
            : "0";


    return (
        <div className="min-h-screen bg-comic-pattern p-4 text-left mt-35 ml-18">
            {/* Titel + genomsnitt */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2">
                    YOUR RATINGS
                </h1>
                <span className="text-md text-black mr-18 font-semibold bg-pink-500 border-4 border-black shadow-[4px_4px_0px_black] p-2 text-center [backface-visibility:hidden] transition duration-300 ease-in-out hover:scale-110 hover:-translate-y-1">
                    Average rating: {avgRating} / 5
                </span>
            </div>

            {ratings.length === 0 ? (
                <p className="text-gray-600 mt-4">No ratings yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px]">
                    {ratings.map((item) => (
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