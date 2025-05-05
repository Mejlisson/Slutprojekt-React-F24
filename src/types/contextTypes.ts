export type FavoriteItem = {
    id: number;
    name: string;
    type: 'ALL' | 'COMIC' | 'MOVIE' | 'HERO' | 'CREATOR';
    image: string;
    rating: number;
    resource_type: string;
}
export type RatingItem = {
    id: string;
    name: string;
    image: string;
    resource_type: string;
    rating: number;
    read: boolean;
    review?: string;
    pages?: number;
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