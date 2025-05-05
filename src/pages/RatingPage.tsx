import { useRating } from "../context/ratingContext";

export default function RatingPage() {
    const { state, dispatch } = useRating();
    const ratings = state.ratings;

    return (
        <div className="ml-18 mb-10">
            <div className="min-h-screen bg-comic-pattern p-4 text-left mt-35 ml-0">
                <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2 mb-6 w-fit">
                    YOUR RATINGS
                </h1>

                {ratings.length === 0 ? (
                    <p className="text-gray-600 mt-4">No ratings yet!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1400px]">
                        {ratings.map((item) => (
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

                                <div className="flex justify-center gap-1 my-2">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <span key={num}>
                                            {num <= item.rating ? "⭐" : "☆"}
                                        </span>
                                    ))}
                                </div>
                                {/* Remove button */}
                                <button
                                    onClick={() => dispatch({ type: "REMOVE_RATING", payload: item.id })}
                                    className="mt-4 mx-auto bg-white hover:bg-red-600 px-3 py-1 rounded-full flex items-center justify-center border-2 border-black shadow-[4px_4px_0px_black] transition duration-300 ease-in-out hover:scale-[1.2]"
                                >
                                    <img
                                        src="/removeIcon.jpg"
                                        alt="Remove"
                                        className="w-6 h-6 object-contain"
                                    />
                                </button>



                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
