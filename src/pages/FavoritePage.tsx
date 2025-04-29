import { useFavorite } from "../context/FavoriteContext";

function FavoritePage() {
    const { state, dispatch } = useFavorite();
    const favorites = state.favorites;

    return (
        <div className="min-h-screen bg-comic-pattern p-4 text-center">
            <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2 inline-block mb-6">
                YOUR FAVORITES
            </h1>

            {favorites.length === 0 ? (
                <p className="text-gray-600 mt-4">Please add yuo're favorites!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favorites.map((item) => (
                        <div
                            key={item.id}
                            className="border-4 border-black p-4 shadow-[4px_4px_0px_black] bg-white relative"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover rounded mb-2"
                            />
                            <span className="absolute top-0 left-0 bg-black text-white text-xs px-2 py-1">
                                {item.type}
                            </span>
                            <h2 className="text-lg font-bold">{item.name}</h2>
                            <div className="flex justify-center gap-1 my-2">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i}>
                                        {i < item.rating ? "❤️" : "🤍"}
                                    </span>
                                ))}
                            </div>
                            <button
                                onClick={() =>
                                    dispatch({ type: "REMOVE_FAVORITE", payload: item.id })
                                }
                                className="mt-2 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-full"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritePage;
