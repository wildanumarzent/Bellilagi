import ProductCard from '@/components/PageSections/products/component/CardProduct';
import useProducts from '@/store/products';
import BaseOnSearchSkeleton from '@/components/atoms/skeleton/BaseOnSearchSkeleton';

const BaseOnSearch = () => {
  const { loading, products, getProducts } = useProducts();
  if (loading) {
    return <BaseOnSearchSkeleton />;
  }
  return (
    <>
      <div className="py-3">
        <span className="text-black font-bold text-2xl">Berdasarkan pencarianmu</span>
        <div className="carousel rounded-box gap-3 mt-5">
          {products.map((product) => (
            <div className="carousel-item rounded-none mb-3" key={product.id}>
              <ProductCard key={product.id} product={product} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BaseOnSearch;
