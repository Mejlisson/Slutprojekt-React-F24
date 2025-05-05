import { useFavorite } from "../context/FavoriteContext";

function FavoritePage() {
    const { state, dispatch } = useFavorite();
    const favorites = state.favorites;

    return (
        <div className="min-h-screen bg-comic-pattern p-4 text-left mt-35">
            <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2 inline-block ml-18 mb-6 sm:item-center">
                YOUR FAVORITES
            </h1>

            {favorites.length === 0 ? (
                <p className="text-gray-600 mt-4">Please add yuo're favorites!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-4">
                    {favorites.map((item) => (
                        <div
                            key={item.id}
                            className="w-full h-full border-4 border-black p-4 shadow-[4px_4px_0px_black] bg-white relative text-center"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-40 object-cover rounded mb-2"
                            />
                            <h2 className="text-xl font-bold">{item.name}</h2>
                            <p className="text-sm text-pink-500/70">{item.resource_type}</p>

                            <button
                                onClick={() =>
                                    dispatch({ type: "REMOVE_FAVORITE", payload: item.id })
                                }
                                className="mt-2 w-[150px] h-[30px] bg-yellow-400 hover:bg-red-600 text-black hover:text-white rounded"
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