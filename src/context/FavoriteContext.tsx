import { createContext, useReducer, useContext, ReactNode } from 'react';
import { FavoriteItem, FavoriteState, FavoriteAction } from '../types/contextTypes';

const initialState: FavoriteState = {
    favorites: [],
};
/// global derucer-funktion som hanterar state och action med item.id och payload
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
// context provider som wrappar hela appen och ger state och dispatch till alla komponenter