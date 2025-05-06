import ForumActivity from "../components/homepage/ForumActivity";
import IntroVideo from "../components/homepage/IntroVideo";
import MainCard from "../components/homepage/MainCard";
import PopularMovie from "../components/homepage/PopularMovie";
import PopularSeries from "../components/homepage/PopularSerie";
import RandomFacts from "../components/homepage/RandomFacts";
import UpcomingEvents from "../components/homepage/UpcomingEvents";

export default function HomePage() {
    return (
        <>
            <IntroVideo />
            <div className="transform bg-gray-300 relative z-10">
                <div className="mt-[22px] text-white">

                    <div className="bg-gray-300 p-2 mr-20 ml-20 mt-2">
                        <MainCard />
                    </div>

                    <div className="w-full mt-6">
                        <PopularMovie />
                    </div>

                    <div className="mr-20 ml-20 mt-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <PopularSeries />
                        <ForumActivity />
                    </div>
                    <div className="mr-20 ml-20 mt-2 grid grid-cols-1 md:grid-cols-2 gap-10">
                        <UpcomingEvents />
                        <RandomFacts />
                    </div>
                </div>
            </div>
        </>
    );
}