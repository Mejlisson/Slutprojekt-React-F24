import MainCard from "../components/homepage/MainCard";

export default function HomePage() {
    return (
        <div className="transform -skew-y-[4deg] bg-black p-6 mr-[100px] ml-[100px] mt-[50px] h-screen relative z-0">
            <div className="bg-gray-300 skew-y-[2deg] p-10 mt-[50px]">
                <MainCard />
            </div>
        </div>
    );
}
