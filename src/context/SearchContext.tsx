import { createContext, useContext, useState, ReactNode } from "react";

type SearchContextType = {
    showSearch: boolean;
    setShowSearch: (show: boolean) => void;
};

//initialt värde undefined
const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
    const [showSearch, setShowSearch] = useState(false);

    return (
        <SearchContext.Provider value={{ showSearch, setShowSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

// Custom hook för context
export function useSearch() {
    const context = useContext(SearchContext);
    if (context === undefined) {
        throw new Error("useSearch must be used within a SearchProvider");
    }
    return context;
}
