import { FavoriteItem } from "../../context/contextTypes";
import { useFavorite } from "../../context/FavoriteContext";

type FavoriteButtonProps = {
    item: FavoriteItem;
    className?: string;
}

export default function FavoriteButton({ item, className = "" }: FavoriteButtonProps) {
    const { state, dispatch } = useFavorite();
    const isFavorite = state.favorites.some(fav => fav.id === item.id);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch({ type: "REMOVE_FAVORITE", payload: item.id });
        } else {
            dispatch({ type: "ADD_FAVORITE", payload: item });
        }
    };

    return (
        <button
            onClick={toggleFavorite}
            className={`mt-2 px-4 py-2 rounded text-sm font-bold transition ${isFavorite ? "bg-red-500 text-white" : "bg-yellow-400 text-black"
                } ${className}`}
        >
            {isFavorite ? "Ta bort från favoriter ❤️" : "Spara som favorit 🤍"}
        </button>
    );
}