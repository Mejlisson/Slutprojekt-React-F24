import MainCard from "../components/MainCard";

export default function HomePage() {
    return (
        <div className="transform -skew-y-[5deg] bg-black p-6 mr-[100px] ml-[100px] mt-[40px] h-screen">
            <div className="bg-gray-300 skew-y-[1deg] p-6 mt-[70px]">
                <MainCard />
            </div>
        </div>
    );
}
