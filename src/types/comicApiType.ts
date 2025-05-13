export type FavoriteItem = {
    id: string;
    name: string;
    image: string;
    resource_type: string;
    type?: string;
    rating?: number;
};

export type RatingItem = FavoriteItem & {
    read?: boolean;
    review?: string;
    pages?: number;
};

export type FavoriteState = {
    favorites: FavoriteItem[];
}

export type FavoriteAction =
    | { type: 'ADD_FAVORITE'; payload: FavoriteItem }
    | { type: 'REMOVE_FAVORITE'; payload: number };

// Typer för sök
export interface SearchState {
    query: string;
    filter: 'ALL' | 'COMICS' | 'MOVIES' | 'HEROES' | 'Publisher' | 'CREATORS';
}

export type SearchAction =
    | { type: 'SET_QUERY'; payload: string }
    | { type: 'SET_FILTER'; payload: SearchState['filter'] };


export type ComicApiItem = {
    image?: {
        super_url?: string; //Main image of the series
    };
    volume?: {
        name?: string;  //Name of the series
    };
    description?: string; //Brief summary of the series
    id: number;
    name?: string;
    title?: string; //Title of the series
    publisher?: string; //Publisher of the series
    cover_date?: string; //Date of the cover
};

export type ComicTeam = {
    id: number;
    name: string;
    api_detail_url: string;
    image?: {
        icon_url: string;
        medium_url: string;
        original_url: string;
        super_url?: string;
    };
};


export type ResourceType = "issue" | "volume" | "character" | "creator" | "movie" | "series";
