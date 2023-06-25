import useCategeries from '@/store/categories';
import { useEffect } from 'react';

const ServiceCard = () => {
  const { categories, getCategories } = useCategeries();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div className="carousel carousel-center rounded-box p-5 flex gap-3">
      {categories.map((category) => (
        <div className="carousel-item">
          <div className="border p-3 w-auto rounded-full">
            <div className="flex gap-3 w-auto">
              <div>
                <img src={category.image} className="w-[20px]" alt="" />
              </div>
              <span className="text-[14px]">{category.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
