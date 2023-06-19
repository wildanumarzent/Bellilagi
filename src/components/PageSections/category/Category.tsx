import useCategeries from '@/store/categories';
import ServiceCard from './component/ServiceCard';
import CategoryCard from './component/CategoryCard';
import { useEffect } from 'react';

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
