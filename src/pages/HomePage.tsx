import ForumActivity from "../components/homepage/ForumActivity";
import IntroVideo from "../components/homepage/introVideo";
import MainCard from "../components/homepage/MainCard";
import PopularMovies from "../components/homepage/PopularMovie";
import PopularSeries from "../components/homepage/PopularSerie";
import RandomFacts from "../components/homepage/RandomFacts";
import UpcomingEvents from "../components/homepage/UpcomingEvents";

export default function HomePage() {
    return (
        <>
            <IntroVideo />
            <div className="transform bg-gray-200 p-2 relative z-10">
                <div className=" mt-[22px] text-white">
                    <div className="bg-gray-300 p-2 mr-20 ml-20 mt-2">
                        <MainCard />
                    </div>
                    <div className="mr-20 ml-20 mt-2 h-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        <PopularMovies />
                        <PopularSeries />
                    </div>

                    <div className="mr-20 ml-20 mt-2 h-auto gap-10">
                        <ForumActivity />
                    </div>

                    {/* Sista två rutor */}
                    <div className="mr-20 ml-20 mt-2 h-auto grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <UpcomingEvents />
                        </div>
                        <div>
                            <RandomFacts />
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}