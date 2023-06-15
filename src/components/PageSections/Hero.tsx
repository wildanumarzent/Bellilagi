
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay,Pagination,Navigation } from "swiper";
const BannerContent = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 250,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            
            >
                <SwiperSlide><img className="rounded-xl" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/12/2fab26e0-be73-4ab5-8f36-f3ddcb2cc9d2.jpg.webp?ect=4g" alt="" /></SwiperSlide>
                <SwiperSlide><img className="rounded-xl" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2023/6/14/34924d6e-4c9c-4413-a8dc-2b2b783bb231.jpg.webp?ect=4g" alt="" /></SwiperSlide>
            </Swiper>
        </>
    );
}

export default BannerContent;