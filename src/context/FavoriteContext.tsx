import { createContext, useReducer, useContext, ReactNode } from 'react';
import { FavoriteItem, FavoriteState, FavoriteAction } from '../types/contextTypes';

const initialState: FavoriteState = {
    favorites: [],
};
/// Reducer function to manage the favorite items(add/remove controls/handles via id)
function favoriteReducer(state: FavoriteState, action: FavoriteAction): FavoriteState {
    switch (action.type) {
        case 'ADD_FAVORITE':
            if (state.favorites.find(item => item.id === action.payload.id)) return state;
            return { favorites: [...state.favorites, action.payload] };

        case 'REMOVE_FAVORITE':
            return { favorites: state.favorites.filter(item => item.id !== action.payload) };

        default:
            return state;
    }
}

/// Create a context for the favorite items
const FavoriteContext = createContext<{
    state: FavoriteState;
    dispatch: React.Dispatch<FavoriteAction>;
}>({
    state: initialState,
    dispatch: () => null,
});

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(favoriteReducer, initialState);
    return (
        <FavoriteContext.Provider value={{ state, dispatch }}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);