import { useState } from "react";
import { RatingItem } from "../../types/contextTypes";
import { useRating } from "../../context/RatingContext";

type AddMoreModalProps = {
    item: Omit<RatingItem, "rating" | "read" | "review" | "pages">;
    onClose: () => void;
}

export default function AddMoreModal({ item, onClose }: AddMoreModalProps) {
    const { dispatch, state } = useRating();
    const existing = state.ratings.find((r) => r.id === item.id);
    const [read, setRead] = useState(existing?.read || false);
    const [review, setReview] = useState(existing?.review || "");
    const [pages, setPages] = useState<number | "">(existing?.pages || "");

    const handleSave = () => {
        dispatch({
            type: "ADD_OR_UPDATE_RATING",
            payload: {
                ...item,
                rating: existing?.rating || 0,
                read,
                review,
                pages: pages ? Number(pages) : undefined,
            },
        });
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative border-4 border-black">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-3 text-black text-lg font-bold hover:text-red-500"
                >
                    ✕
                </button>
                <h2 className="text-xl font-bold mb-4">Add more details</h2>

                <div className="mb-4">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            checked={read}
                            onChange={() => setRead(!read)}
                            className="form-checkbox"
                        />
                        Mark as read
                    </label>
                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Text Review:</label>
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        className="w-full h-24 resize-none overflow-y-auto border border-gray-300 rounded px-3 py-2"
                        placeholder="Write your review here..."
                    ></textarea>

                </div>

                <div className="mb-4">
                    <label className="block font-medium mb-1">Number of pages:</label>
                    <input
                        type="number"
                        value={pages}
                        onChange={(e) => setPages(e.target.value === "" ? "" : Number(e.target.value))}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        placeholder="e.g. 120"
                    />
                </div>

                <button
                    onClick={handleSave}
                    className="bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded font-bold border border-black shadow"
                >
                    Save
                </button>
            </div>
        </div>
    );
}
