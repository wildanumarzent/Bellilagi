import ProductCard from '@/components/PageSections/products/component/CardProduct';
import useProducts from '@/store/products';
import { useEffect } from 'react';

const ProductList = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 mt-3">
      <div className="flex justify-center space-x-5">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
