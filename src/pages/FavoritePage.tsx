import EntityCard from "../components/layout/EntityCard";
import { useFavorite } from "../context/FavoriteContext";


function FavoritePage() {
    const { state, dispatch } = useFavorite();
    const favorites = state.favorites;

    return (
        <div className="min-h-screen bg-comic-pattern p-4 text-left mt-35 ml-18">
            <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2 inline-block mb-6">
                YOUR FAVORITES
            </h1>

            {favorites.length === 0 ? (
                <p className="text-gray-600 mt-4">Please add your favorites!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px]">
                    {favorites.map((item) => (
                        <EntityCard
                            key={item.id}
                            item={item}
                            type="favorite"
                            onRemove={() => dispatch({ type: "REMOVE_FAVORITE", payload: item.id })}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritePage;
