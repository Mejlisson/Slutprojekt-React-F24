import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { setShowSearch } = useSearch(); //Hook från SearchContext
    const [showOptions, setShowOptions] = useState(false);

    const handleToggle = (path: string) => {
        navigate(path);
        setShowOptions(false); // Stänger menyn
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-gray-200 h-20 z-50 px-4 flex items-center justify-between">

            {/* Logotypen */}
            <div className="bg-yellow-300 absolute top-0 sm:left-[88px] left-10 h-[100px] sm:h-[130px] w-[130px] place-items-center">
            </div>
            <div
                className="absolute top-2 sm:left-26 sm:top-5 left-[60px] cursor-pointer"
                onClick={() => handleToggle("/")}
            >
                <img src="/logo.png" alt="Logo" className="h-20 w-auto sm:h-24" />
            </div>

            {/* toggler-meny */}
            <div className="absolute top-2 sm:right-22 sm:top-3 right-[50px] cursor-pointer z-50">
                <div
                    className="bg-yellow-300 px-2 py-1 sm:px-3 sm:py-2 rounded-bl-[40px] sm:rounded-bl-[50px] shadow-lg flex items-center gap-2"
                    onClick={() => {
                        if (showOptions) {
                            setShowSearch(true); // SearchOverlay
                            setShowOptions(false);
                        } else {
                            setShowOptions(true);
                        }
                    }}
                >
                    <img src="/search-icon.png" alt="Search" className="h-8 w-8 sm:h-10 sm:w-10" title="Menu" />
                </div>

                {/* vid klick visas favorit och rating */}
                {showOptions && (
                    <div className="absolute top-full right-0 mt-2 flex flex-col items-end gap-2 z-50">
                        <img
                            src="/like-icon.webp"
                            alt="Favorites"
                            className="h-12 w-12 bg-amber-100 p-1 rounded shadow hover:bg-amber-200 transition"
                            title="Favorites"
                            onClick={() => handleToggle("/favorites")}
                        />
                        <img
                            src="/raiting-icon.png"
                            alt="Rating"
                            className="h-12 w-12 bg-amber-100 p-1 rounded shadow hover:bg-amber-200 transition"
                            title="Rating"
                            onClick={() => handleToggle("/ratings")}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}