import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

import useBannerState from '@/store/banners';
import { useEffect } from 'react';
import BannerSkeleton from '../atoms/skeleton/BannerSkeleton';
const BannerContent = () => {
  const { loading, banners, getBanners } = useBannerState();
  useEffect(() => {
    getBanners();
  }, []);

  return (
    <>
      {loading ? (
        <BannerSkeleton />
      ) : (
        <>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2250,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper rounded-xl">
            {banners.map((banner, key) => (
              <SwiperSlide key={key}>
                <img className="rounded-xl w-auto" src={banner.banner_image_path} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      )}
    </>
  );
};

export default BannerContent;
