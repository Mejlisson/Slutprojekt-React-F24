import { useState } from "react";
import { RatingItem } from "../../types/contextTypes";
import { useRating } from "../../context/RatingContext";

interface Props {
    item: Omit<RatingItem, "rating">;
    value?: number;
    onRate?: (val: number) => void;
}

export default function RatingButton({ item, value, onRate }: Props) {
    const { state, dispatch } = useRating();
    const existing = state.ratings.find((r) => r.id === item.id);
    const [rating, setRating] = useState(existing?.rating || 0);

    const currentRating = value !== undefined ? value : rating;

    const handleRate = (val: number) => {
        if (onRate) {
            onRate(val);
        } else {
            setRating(val);
            dispatch({
                type: "ADD_OR_UPDATE_RATING",
                payload: { ...item, rating: val },
            });
        }
    };

    return (
        <div className="flex gap-2 mt-2">
            {[1, 2, 3, 4, 5].map((value) => (
                <button
                    key={value}
                    onClick={() => handleRate(value)}
                    className="w-8 h-8 transition-transform hover:scale-110"
                >
                    <img
                        src={currentRating >= value ? "/star2.png" : "/star1.png"}
                        alt={`${value} star`}
                        className="w-full h-full object-contain"
                    />
                </button>
            ))}
        </div>
    );
}