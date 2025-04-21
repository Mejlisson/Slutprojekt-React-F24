import { useEffect, useState } from "react";

export default function IntroVideo() {
    const [showFull, setShowFull] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShowFull(false);
        }, 5000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className={`w-full flex items-center justify-center transition-all duration-1000 ease-in-out overflow-hidden 
      ${showFull ? "fixed top-0 left-0 h-screen z-50" : "relative h-[350px]"}`}
        >
            <video
                src="/Cv-Video.mp4"
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
            />
        </div>
    );
}