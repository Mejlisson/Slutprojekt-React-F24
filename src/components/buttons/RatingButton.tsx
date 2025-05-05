import { useState } from "react";
import { RatingItem } from "../../types/contextTypes";
import { useRating } from "../../context/ratingContext";

interface Props {
    item: Omit<RatingItem, "rating">;
}

export default function RatingButton({ item }: Props) {
    const { state, dispatch } = useRating();
    const existing = state.ratings.find((r) => r.id === item.id);
    const [rating, setRating] = useState(existing?.rating || 0);

    const handleRate = (value: number) => {
        setRating(value);
        dispatch({
            type: "ADD_OR_UPDATE_RATING",
            payload: { ...item, rating: value },
        });
    };

    return (
        <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((value) => (
                <button
                    key={value}
                    onClick={() => handleRate(value)}
                    className="w-8 h-8"
                >
                    <img
                        src={rating >= value ? "/star2.png" : "/star1.png"}
                        alt={`${value} star`}
                        className="w-full h-full object-contain"
                    />
                </button>
            ))}
        </div>
    );
}