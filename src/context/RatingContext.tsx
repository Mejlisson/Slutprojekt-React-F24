import { createContext, useReducer, useContext, ReactNode } from "react";
import { RatingItem } from "../types/contextTypes";

interface RatingState {
    ratings: RatingItem[];
}

type RatingAction =
    | { type: "ADD_OR_UPDATE_RATING"; payload: RatingItem }
    | { type: "REMOVE_RATING"; payload: string };

const initialState: RatingState = {
    ratings: [],
};
function ratingReducer(state: RatingState, action: RatingAction): RatingState {
    switch (action.type) {
        case "ADD_OR_UPDATE_RATING":
            const existing = state.ratings.find(r => r.id === action.payload.id);
            if (existing) {
                return {
                    ratings: state.ratings.map(r =>
                        r.id === action.payload.id ? action.payload : r
                    ),
                };
            }
            return { ratings: [...state.ratings, action.payload] };

        case "REMOVE_RATING":
            return {
                ratings: state.ratings.filter(r => r.id !== action.payload),
            };

        default:
            return state;
    }
}

const RatingContext = createContext<{
    state: RatingState;
    dispatch: React.Dispatch<RatingAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const RatingProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(ratingReducer, initialState);
    return (
        <RatingContext.Provider value={{ state, dispatch }}>
            {children}
        </RatingContext.Provider>
    );
};

export const useRating = () => useContext(RatingContext);