import useCategeries from '@/store/categories';
import { useEffect } from 'react';
import CategorySkeleton from '@/components/atoms/skeleton/CategorySkeleton';
const CategoryCard = () => {
  const { loading, IMGCategories, getIMGCategories } = useCategeries();

  useEffect(() => {
    getIMGCategories();
  }, []);
  if (loading) {
    return <CategorySkeleton />;
  }
  return (
    <>
      <div className="p-5">
        <span className="text-3xl">Kategori Pilihan</span>
        {IMGCategories.length && (
          <div className="flex gap-3">
            {IMGCategories.map((category, key) => (
              <div className="flex space-x-5 mt-3" key={key}>
                <div className="card w-36 border hover:border-success">
                  <img src={category.image} className="w-32" alt="" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CategoryCard;
