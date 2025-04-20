import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    const [showOptions, setShowOptions] = useState(false);

    const handleNavigate = (path: string) => {
        navigate(path);
        setShowOptions(false); // Stäng efter klick
    };

    return (
        <nav className="relative bg-gray-200 h-20 px-4 flex items-center justify-between">
            {/* Logotypens backgrund */}
            <div className="bg-yellow-300 absolute top-0 left-20 h-[120px] w-[130px] place-items-center" ></div>

            {/* Logotypen */}
            <div className="absolute top-3 left-24 cursor-pointer"
                onClick={() => navigate("/")}>

                <img src="/logo.png"
                    alt="Comic Vine Logo"
                    className="h-24 w-auto" />
            </div>


            {/* Ikon meny */}
            <div className="absolute top-3 right-4 cursor-pointer z-50">

                {/* serch icon, togglar visning */}
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
                    <img
                        src="/search-icon.png"
                        alt="Search"
                        className="h-7 w-7"
                        title="Menu"
                    />
                </div>

                {/* Alternativmeny som visas tills klick */}
                {showOptions && (
                    <div className="absolute top-full right-0 mt-2 flex flex-col items-end gap-2 z-50">
                        <img
                            src="/like-icon.webp"
                            alt="Favorites"
                            className="h-9 w-9 bg-yellow-100 p-1 rounded shadow"
                            title="Favorites"
                            onClick={() => handleNavigate("/favorites")}
                        />
                        <img
                            src="/raiting-icon.png"
                            alt="Rating"
                            className="h-9 w-9 bg-yellow-100 p-1 rounded shadow"
                            title="Rating"
                            onClick={() => handleNavigate("/ratings")}
                        />
                    </div>
                )}
            </div>
        </nav>
    );
}
