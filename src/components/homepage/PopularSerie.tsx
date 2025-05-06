import { ComicApiItem } from "../../types/contextTypes";
import { useFetchComicData } from "../../api/fetch/useFetchComicData";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SeeMoreButton from "../buttons/SeeMoreButton";

export default function PopularSeries() {
    const { data: series, loading, error } = useFetchComicData<ComicApiItem>("volumes", 15);

    return (
        <section className="bg-red-600 py-10 md:px-10 text-white relative">
            <h2 className="text-5xl font-extrabold uppercase mb-6">Top Volume</h2>

            {loading && (
                <div className="flex justify-center items-center">
                    <img src="/loading.gif" alt="Loading..." className="w-16 h-16" />
                </div>
            )}
            {error && <p className="text-red-500 text-center">{error}</p>}

            <Swiper
                modules={[Navigation]}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                spaceBetween={20}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                className="px-6"
            >
                {series.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative rounded overflow-hidden shadow-lg border-4 border-black group transition-transform duration-300 hover:-translate-y-1">
                            <img
                                src={item.image?.super_url}
                                alt={item.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-90 transition duration-300 flex flex-col justify-end p-2">
                                <h3 className="text-sm font-bold text-yellow-300 mb-1">
                                    {item.name || item.volume?.name}
                                </h3>
                                <SeeMoreButton id={item.id} resource="volume" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                {/*vänster*/}
                <div className="swiper-button-prev absolute -left-10 cursor-pointer hover:scale-110 transition">
                    <img src="/left.png" alt="Scroll Left" className="w-10 h-10" />
                </div>

                {/*höger*/}
                <div className="swiper-button-next absolute -right-6 cursor-pointer hover:scale-110 transition">
                    <img src="/right.png" alt="Scroll Right" className="w-10 h-10" />
                </div>


            </Swiper>
        </section>
    );
}