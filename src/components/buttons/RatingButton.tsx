
import { useState } from "react";
import { RatingItem } from "../../types/contextTypes";
import { useRating } from "../../context/RatingContext";


interface Props {
    item: Omit<RatingItem, "rating">;
}

export default function RatingButton({ item }: Props) {
    const { dispatch } = useRating();
    const [rating, setRating] = useState(0);

    const handleRate = (value: number) => {
        setRating(value);
        dispatch({
            type: "ADD_OR_UPDATE_RATING",
            payload: { ...item, rating: value },
        });
    };

    return (
        <div className="flex gap-1 mt-2">
            {[1, 2, 3, 4, 5].map((num) => (
                <button
                    key={num}
                    onClick={() => handleRate(num)}
                    className={`text-xl ${rating >= num ? "text-red-500" : "text-gray-300"}`}
                >
                    ⭐
                </button>
            ))}
        </div>
    );
}