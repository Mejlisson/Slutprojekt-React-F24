import { useEffect, useState } from "react";

const triviaList = [
    "Did you know Wolverine was almost called 'The Badger'?",
    "Spider-Man was the first teenage superhero who wasn’t a sidekick.",
    "The Joker was supposed to die after his first appearance.",
    "Iron Man was created to be disliked – and it worked!",
    "Deadpool once killed the entire Marvel Universe.",
    "The Hulk was originally grey, not green.",
];

export default function RandomFacts() {
    const [fact, setFact] = useState("");

    useEffect(() => {
        const randomFact = triviaList[Math.floor(Math.random() * triviaList.length)];
        setFact(randomFact);
    }, []);

    return (
        <section className="relative flex items-center justify-center w-[430px]">
            <div
                className="relative bg-cover bg-no-repeat h-[390px] w-full "
                style={{
                    backgroundImage: "url('/bg-Facts.jpg')",
                }}
            >
                {/* Pratbubbla-titel */}
                <div className="absolute -top-6 left-6 bg-yellow-300 px-4 py-1 border-4 border-black shadow-[0px_4px_4px_black] shadow-md text-sm font-bold">
                    Fun Fact!
                </div>

                {/* Centrera faktatexten */}
                <div className="absolute top-53 left-50 transform -translate-x-27 -translate-y-1/2 px-5">
                    <p className="text-xl italic font-comic text-white text-center drop-shadow-lg">
                        {fact}
                    </p>
                </div>
            </div>

        </section>
    );
}
