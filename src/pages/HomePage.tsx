import ForumActivity from "../components/homepage/ForumActivity";
import MainCard from "../components/homepage/MainCard";
import PopularMovies from "../components/homepage/PopularMovie";
import PopularSeries from "../components/homepage/PopularSerie";

export default function HomePage() {
    return (
        <div className="transform -skew-y-[4deg] bg-black p-6 mr-[100px] ml-[100px] mt-[75px] relative z-0">
            <div className="skew-y-[1deg] mt-[22px] text-white space-y-6">
                <div className="bg-gray-300 p-6">
                    <MainCard />
                </div>
                <div className="transform -skew-y-[1deg] mt-[15px] h-[150px] grid grid-cols-1 md:grid-cols-2 gap-6">
                    <PopularMovies />
                    <PopularSeries />
                </div>
                <div className="transform -skew-y-[1deg] mt-[110px]">
                    <ForumActivity />
                </div>

                {/* Sista två rutor */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-300 p-4 text-black text-center rounded">
                        Upcoming Comic Events
                    </div>
                    <div className="bg-gray-300 p-4 text-black text-center rounded">
                        Random Comic Facts
                    </div>
                </div>
            </div>
        </div>
    );
}
