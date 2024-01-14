import ProductCard from '@/components/PageSections/products/component/CardProduct';
import ProductSkeleton from '@/components/atoms/skeleton/ProductSkeleton';
import useProducts from '@/store/products';
import { useEffect } from 'react';

const ProductList = () => {
  const { loading, products, getProducts } = useProducts();
  useEffect(() => {
    getProducts("");
  }, []);
  if (loading) {
    return <ProductSkeleton />;
  }
  return (
    <>
      <img
        src="https://images.tokopedia.net/img/WVCyGU/2023/6/30/1d6a4c4e-d1c6-4afa-81a3-8747148bf5cf.jpg"
        alt=""
      />
      <div className="flex flex-wrap justify-center sm:justify-start gap-5 py-9">
       {products?.length == 0 ? 
          <>
            <div className="flex flex-col justify-center items-center mt-10">
              <img src="/empty_box.jpeg" className="w-24" alt="Image" />
              <span>Product Kosong</span>
            </div>
          </> 
          : 
          <>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
          </>}

      </div>
    </>
  );
};

export default ProductList;
