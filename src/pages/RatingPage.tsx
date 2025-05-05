import EntityCard from "../components/layout/EntityCard";
import { useRating } from "../context/RatingContext";


export default function RatingPage() {
    const { state, dispatch } = useRating();
    const ratings = state.ratings;

    return (
        <div className="min-h-screen bg-comic-pattern p-4 text-left mt-35 ml-18">
            <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2 mb-6 w-fit">
                YOUR RATINGS
            </h1>

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
