import useCategeries from '@/store/categories';
import BannerContent from '../../Hero';
import { useEffect } from 'react';
import Services from './components/Services';
import Categories from './components/Categories';

const CategoryMobile = () => {
  const { categories, getCategories } = useCategeries();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="card bg-base-0 border-0 p-0 mt-2 text-base-300 sm:hidden">
      <div className="card-body p-0 flex flex-col">
        <div className="carousel rounded-box gap-3">
          {categories.map((categories) => (
            <Categories categories={categories} />
          ))}
        </div>
        <div className="my-3">
          <BannerContent />
        </div>
        <div className="carousel rounded-box gap-3">
          {categories.reverse().map((services) => (
            <Services services={services} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryMobile;
