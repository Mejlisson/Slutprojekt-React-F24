import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(false);

    const handleToggle = (path: string) => {
        navigate(path);
        setShowOptions(false); // Stänger menyn
    };

    return (
        <nav className="relative bg-gray-200 h-20 px-4 flex items-center justify-between">
            {/* Logotypen */}
            <div className="bg-yellow-300 absolute top-0 left-20 h-[120px] w-[130px] place-items-center">
                <img src="yellow.webp" alt="Bg" className="h-10 w-10" title="Bg" />
            </div>
            <div
                className="absolute top-3 left-24 cursor-pointer"
                onClick={() => handleToggle("/")}
            >
                <img src="/logo.png" alt="Logo" className="h-24 w-auto" />
            </div>

            {/* toggler-meny */}
            <div className="absolute top-3 right-4 cursor-pointer z-50">
                <div
                    className="bg-yellow-300 px-3 py-2 rounded-bl-[50px] shadow-lg flex items-center gap-2"
                    onClick={() => {
                        if (showOptions) {
                            navigate("/search");
                            setShowOptions(false);
                        } else {
                            setShowOptions(true);
                        }
                    }}
                >
                    <img src="/search-icon.png" alt="Search" className="h-7 w-7" title="Menu" />
                </div>

                {/* vid hover visas favorit och raiting */}
                {showOptions && (
                    <div className="absolute top-full right-0 mt-2 flex flex-col items-end gap-2 z-50">
                        <img
                            src="/like-icon.webp"
                            alt="Favorites"
                            className="h-9 w-9 bg-amber-100 p-1 rounded shadow hover:bg-amber-200 transition"
                            title="Favorites"
                            onClick={() => handleToggle("/favorites")}
                        />
                        <img
                            src="/raiting-icon.png"
                            alt="Rating"
                            className="h-9 w-9 bg-amber-100 p-1 rounded shadow hover:bg-amber-200 transition"
                            title="Rating"
                            onClick={() => handleToggle("/ratings")}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}
