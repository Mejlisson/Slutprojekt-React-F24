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
            <div className="bg-gray-300">
                <div className="">

                    <div className="bg-gray-300 p-2 mr-17 ml-17">
                        <MainCard />
                    </div>

                    <div className="w-full mt-6 md:grid-cols-1">
                        <PopularMovie />
                    </div>

                    <div className="md:grid-cols-1">
                        <PopularSeries />
                    </div>
                    <div className="m-50 bg-gray-300">
                    </div>
                </div>
            </div>
        </>
    );
}