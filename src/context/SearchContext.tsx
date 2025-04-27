import { createContext, useContext, useState, ReactNode } from "react";

type SearchContextType = {
    showSearch: boolean; //är sökinput öppen?
    setShowSearch: (show: boolean) => void;
};

const SearchContext = createContext<SearchContextType | undefined>(undefined); //en global plats för att lagra "ska search-overlay visas eller inte?"


//en serachProvider som gör det möjligt för komponenter att läsa och ändra showSearch
export function SearchProvider({ children }: { children: ReactNode }) {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <SearchContext.Provider value={{ showSearch, setShowSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

// ⭐Custom hook som gör det enkelt för komponenter att läsa och ändra showSearch
export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
}