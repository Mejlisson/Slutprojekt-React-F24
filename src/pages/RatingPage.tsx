import { useState } from "react";
import { useRating } from "../context/RatingContext";

export default function RatingPage() {
    const { state, dispatch } = useRating();
    const ratings = state.ratings;

    return (
        <div className="min-h-screen bg-comic-pattern p-4 text-left">
            <h1 className="text-4xl font-bold text-red-600 bg-yellow-300 border-4 border-black px-4 py-2 mb-6 w-fit">
                YOUR RATINGS
            </h1>
            {ratings.length === 0 ? (
                <p className="text-pink-600 mt-40 flex justify-center">No ratings yet!</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-[1200px] mx-auto px-4">
                    {ratings.map((item) => (
                        <FlipCard key={item.id} item={item} onRemove={() => dispatch({ type: "REMOVE_RATING", payload: item.id })} />
                    ))}
                </div>
            )}
        </div>
    );
}

function FlipCard({ item, onRemove }: { item: any; onRemove: () => void }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[320px] cursor-pointer [perspective:1000px] hover:-translate-y-1 transition-transform duration-300"
        >
            <div
                className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""
                    }`}
            >
                {/* Front */}
                <div
                    className="absolute inset-0 bg-white border-4 border-black shadow-[4px_4px_0px_black] p-4 text-center [backface-visibility:hidden]"
                >
                    <button
                        onClick={() => setFlipped(!flipped)}
                        className="absolute -top-5 -right-1 z-10"
                    >
                        <img
                            src="/flip.png"
                            alt="Flip"
                            className="w-12 h-13 hover:scale-130 transition-transform"
                        />
                    </button>

                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded mb-2"
                    />
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-sm text-pink-500/70">{item.resource_type}</p>
                    <div className="flex justify-center gap-1 my-2">
                        {[1, 2, 3, 4, 5].map((num) => (
                            <span key={num}>{num <= item.rating ? "⭐" : "☆"}</span>
                        ))}
                    </div>
                </div>

                {/* Back */}
                <div
                    className="absolute inset-0 bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_black] p-4 text-left [transform:rotateY(180deg)] [backface-visibility:hidden]"
                    onClick={() => setFlipped(!flipped)}
                >
                    <h3 className="text-lg font-bold mb-2">Added Info</h3>
                    <p className="text-m text-pink-600"><strong>Review:</strong> {item.review || "None"}</p>
                    <p className="text-m text-pink-600"><strong>Read Pages:</strong> {item.pages || "-"}</p>
                    <p className="text-m text-pink-600"><strong>Read:</strong> {item.read ? "Yes" : "No"}</p>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onRemove();
                        }}
                        className="mt-6 mx-auto block bg-white hover:bg-pink-600 px-3 py-1 rounded-full border-2 border-black text-black shadow-[4px_4px_0px_black] transition duration-300 ease-in-out hover:scale-[1.3]"
                    >
                        <img src="/removeIcon.jpg" alt="Remove" className="w-7 h-7 mx-auto" />
                    </button>
                    <p className="text-xs text-gray-500 mt-8 text-center">Click to flip back</p>
                </div>
            </div>
        </div>
    );
}