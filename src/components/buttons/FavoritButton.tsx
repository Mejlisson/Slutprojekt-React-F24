import { FavoriteItem } from "../../types/contextTypes";
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
            dispatch({ type: "REMOVE_FAVORITE", payload: item.id });//kollar om itemet är en favorit genom att jämföra id:t.
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

//Denna komponent är en knapp som används för att spara eller ta bort en favorit.
//useFavorite hooken används för att hämta state och dispatch funktionen.
//den kollar om itemet redan är en favorit genom att jämföra id:t.
//Om det redan är favorit så tar den bort från favoriterna med click,om den inte är lägger till