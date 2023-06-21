import ProductCard from '@/components/PageSections/products/component/CardProduct';
import useProducts from '@/store/products';
import { useEffect } from 'react';

const ProductList = () => {
  const { products, getProducts } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    // <div className="bg-white rounded-lg shadow-lg py-9 px-10 mt-3">
    <div className="flex flex-wrap justify-start gap-5 py-9">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    // </div>
  );
};

export default ProductList;
