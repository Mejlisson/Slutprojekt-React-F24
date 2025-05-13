import { useState } from "react";
import { RatingItem } from "../../types/comicApiType";

type Props = {
    item: RatingItem;
    type: "rating" | "favorite";
    onRemove: () => void;
};

export default function EntityCard({ item, type, onRemove }: Props) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="relative w-full h-[320px] cursor-pointer [perspective:1000px] hover:-translate-y-1 transition-transform duration-300 will-change-[transform]">
            <div
                className={`absolute inset-0 transition-transform duration-500 [transform-style:preserve-3d] ${type === "rating"
                    ? flipped
                        ? "[transform:rotateY(180deg)]"
                        : "[transform:rotateY(0deg)]"
                    : ""
                    }`}
            >
                {/* Front */}
                <div className="absolute inset-0 bg-white border-4 border-black shadow-[4px_4px_0px_black] p-4 text-center [backface-visibility:hidden]">
                    {type === "rating" && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setFlipped(!flipped);
                            }}
                            className="absolute -top-5 -right-1 z-10"
                        >
                            <img
                                src="/flip.png"
                                alt="Flip"
                                className="w-12 h-13 hover:scale-110 transition-transform"
                            />
                        </button>
                    )}

                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-40 object-cover rounded mb-2"
                    />
                    <h2 className="text-xl font-bold">{item.name}</h2>
                    <p className="text-sm text-pink-500/70">{item.resource_type}</p>

                    {type === "rating" && (
                        <div className="flex justify-center gap-1 my-2">
                            {[1, 2, 3, 4, 5].map((num) => (
                                <span key={num}>{num <= item.rating ? "⭐" : "☆"}</span>
                            ))}
                        </div>
                    )}

                    {type === "favorite" && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemove();
                            }}
                            className="mt-6 mx-auto block bg-white hover:bg-pink-600 px-3 py-1 rounded-full border-2 border-black text-black shadow-[4px_4px_0px_black] transition duration-300 ease-in-out hover:scale-[1.3]"
                        >
                            <img
                                src="/removeIcon.jpg"
                                alt="Remove"
                                className="w-6 h-6 mx-auto"
                            />
                        </button>
                    )}
                </div>

                {/* Back (flipped card, bara for rating) */}
                {type === "rating" && (
                    <div
                        className="absolute inset-0 bg-yellow-100 border-4 border-black shadow-[4px_4px_0px_black] p-4 text-left [transform:rotateY(180deg)] [backface-visibility:hidden]"
                        onClick={() => setFlipped(false)}
                    >
                        <h3 className="text-lg font-bold mb-2">Added Info</h3>

                        <div className="relative max-h-24 overflow-y-auto pr-1">
                            <p className="text-sm text-pink-600 whitespace-pre-line break-words">
                                <strong>Review:</strong> {item.review || "None"}
                            </p>
                        </div>

                        <p className="text-sm text-pink-600">
                            <strong>Read Pages:</strong> {item.pages || "-"}
                        </p>
                        <p className="text-sm text-pink-600">
                            <strong>Read:</strong> {item.read ? "Yes" : "No"}
                        </p>

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                onRemove();
                            }}
                            className="mt-8 mx-auto block bg-white hover:bg-pink-600 px-3 py-1 rounded-full border-2 border-black text-black shadow-[4px_4px_0px_black] transition duration-300 ease-in-out hover:scale-[1.3]"
                        >
                            <img
                                src="/removeIcon.jpg"
                                alt="Remove"
                                className="w-6 h-6 mx-auto"
                            />
                        </button>

                        <p className="text-xs text-pink-600 mt-6 text-center">
                            Click to flip back
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}