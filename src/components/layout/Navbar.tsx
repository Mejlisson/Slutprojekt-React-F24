import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../context/SearchContext";

export default function Navbar() {
    const navigate = useNavigate();
    const { setShowSearch } = useSearch();
    const [showOptions, setShowOptions] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

    // Scroll-effekt för bakgrund
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY <= 100); // Inverterad effekt
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Hanterar menyval och stänger dropdown
    const handleToggle = (path: string) => {
        navigate(path);
        setShowOptions(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full h-20 z-50 px-4 flex items-center justify-between transition-all duration-300
            ${scrolled
                    ? "bg-gray-200 shadow-md border-b border-black"
                    : "bg-white/30 backdrop-blur-md border-b border-white/30"
                }`}
        >
            {/* Logotypen */}
            <div className="bg-yellow-300 absolute top-0 sm:left-[88px] left-10 h-[100px] sm:h-[130px] w-[130px] place-items-center" />
            <div
                className="absolute top-2 sm:left-26 sm:top-5 left-[60px] cursor-pointer"
                onClick={() => handleToggle("/")}
            >
                <img src="/logo.png" alt="Logo" className="h-20 w-auto sm:h-24" />
            </div>

            {/* Meny-knapp med hover */}
            <div
                className="absolute top-2 sm:right-22 sm:top-3 right-[50px] cursor-pointer z-50"
                onMouseEnter={() => {
                    if (hoverTimeout) clearTimeout(hoverTimeout);
                    setShowOptions(true);
                }}
                onMouseLeave={() => {
                    const timeout = setTimeout(() => {
                        setShowOptions(false);
                    }, 300);
                    setHoverTimeout(timeout);
                }}
            >
                <div className="bg-yellow-300 hover:bg-yellow-400 px-2 py-1 sm:px-3 sm:py-2 rounded-bl-[40px] sm:rounded-bl-[50px] shadow-lg flex items-center gap-2">
                    <img
                        src="/search-icon.png"
                        alt="Search"
                        className="h-12 w-12"
                        title="Search"
                        onClick={() => {
                            setShowSearch(true);
                            setShowOptions(false);
                        }}
                    />
                </div>

                {/*meny med hover*/}
                {showOptions && (
                    <div
                        className="absolute top-full right-0 mt-2 flex flex-col items-end gap-2 z-50 bg-white p-2 rounded shadow"
                        onMouseEnter={() => {
                            if (hoverTimeout) clearTimeout(hoverTimeout);
                        }}
                        onMouseLeave={() => {
                            const timeout = setTimeout(() => {
                                setShowOptions(false);
                            }, 300);
                            setHoverTimeout(timeout);
                        }}
                    >
                        <img
                            src="/like-icon.webp"
                            alt="Favorites"
                            className="h-12 w-12 bg-amber-100 p-1 rounded shadow hover:bg-amber-300 transition"
                            title="Favorites"
                            onClick={() => handleToggle("/favorites")}
                        />
                        <img
                            src="/raiting-icon.png"
                            alt="Rating"
                            className="h-12 w-12 bg-amber-100 p-1 rounded shadow hover:bg-amber-300 transition"
                            title="Rating"
                            onClick={() => handleToggle("/ratings")}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}