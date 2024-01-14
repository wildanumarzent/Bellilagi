import useCategeries from '@/store/categories';
import BannerContent from '../../Hero';
import { useEffect } from 'react';
import Services from './components/Services';
import Categories from './components/Categories';

const CategoryMobile = () => {
  const { categories, OtherCategories, getCategories, getOtherCategories } = useCategeries();
  useEffect(() => {
    getCategories();
    getOtherCategories()
  }, []);
  
  return (
    <div className="card bg-base-0 border-0 p-0 mt-2 text-base-300 sm:hidden">
      <div className="card-body p-0 flex flex-col">
        <div className="carousel rounded-box gap-3">
          {categories.map((categories, key) => (
            <Categories key={key} categories={categories} />
          ))}
        </div>
        <div className="my-3">
          <BannerContent />
        </div>
        <div className="carousel rounded-box gap-3">
        {OtherCategories.map((otherCategories, key) => (
            <Categories key={key} categories={otherCategories} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMobile;
