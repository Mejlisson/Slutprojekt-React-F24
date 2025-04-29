export type FavoriteItem = {
    id: number;
    name: string;
    type: 'COMIC' | 'MOVIE' | 'HERO' | 'CREATOR';
    image: string;
    rating: number;
}

export type FavoriteState = {
    favorites: FavoriteItem[];
}

export type FavoriteAction =
    | { type: 'ADD_FAVORITE'; payload: FavoriteItem }
    | { type: 'REMOVE_FAVORITE'; payload: number };

// Typer för sök
export interface SearchState {
    query: string;
    filter: 'ALL' | 'COMICS' | 'MOVIES' | 'HEROES' | 'CREATORS';
}

export type SearchAction =
    | { type: 'SET_QUERY'; payload: string }
    | { type: 'SET_FILTER'; payload: SearchState['filter'] };
