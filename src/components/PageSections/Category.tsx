// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ServiceCard from '../atoms/card/ServiceCard';
import CategoryCard from '../atoms/card/CategoryCard';

const Category = () => {
  return (
    <div className="bg-white flex flex-col justify-start border mt-3 rounded-lg shadow-md">
      <div className="flex">
        <CategoryCard />
        <div className="p-5">
          <span className="text-3xl">Top Up & Tagihan</span>
          <div></div>
        </div>
      </div>
      <ServiceCard />
    </div>
  );
};

export default Category;
