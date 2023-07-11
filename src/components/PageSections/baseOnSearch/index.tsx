import ProductCard from '@/components/PageSections/products/component/CardProduct';
import useProducts from '@/store/products';
import CraouselSkeleton from '@/components/atoms/skeleton/CraouselSkeleton';

const BaseOnSearch = () => {
  const { loading, products, getProducts } = useProducts();
  return (
    <>
      {loading ? (
        <CraouselSkeleton />
      ) : (
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
      )}
    </>
  );
};

export default BaseOnSearch;
