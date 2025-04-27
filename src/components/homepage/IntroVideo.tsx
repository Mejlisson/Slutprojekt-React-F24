import { useEffect, useState } from "react";

export default function IntroVideo() {
    const [showFull, setShowFull] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowFull(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    const handleSkipIntro = () => {
        setShowFull(false);
    };

    return (
        <div
            className={`w-full flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out 
            ${showFull ? "fixed top-0 left-0 h-screen z-50" : "relative h-[350px] z-10"}`}
        >
            {/* Videon */}
            <video
                src="/Cv-Video.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
            />

            {/* Skip-knappe */}
            {showFull && (
                <button
                    onClick={handleSkipIntro}
                    className="absolute top-5 right-6 bg-yellow-300 text-black font-bold py-2 px-4 rounded-full shadow-lg hover:bg-yellow-400 transition"
                >
                    Skip
                </button>
            )}
        </div>
    );
}