import useCategeries from '@/store/categories';
import { useEffect } from 'react';
import ServiceSkeleton from '@/components/atoms/skeleton/ServiceSkeleton';

const ServiceCard = () => {
  const { loading, categories, getCategories } = useCategeries();
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <>
      {loading ? (
        <ServiceSkeleton />
      ) : (
        <>
          <div className="carousel carousel-center rounded-box p-5 flex gap-3">
            {categories.map((category, key) => (
              <div className="carousel-item" key={key}>
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
        </>
      )}
    </>
  );
};

export default ServiceCard;
