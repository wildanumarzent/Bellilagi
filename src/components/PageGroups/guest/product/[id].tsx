import useProduct from '@/store/products/detail';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ImageDetail from './components/ImageDetail';
import InformationProduct from './components/InformationProduct';
import CartInformation from './components/InformationCart';

const DetailProduct = () => {
  const router = useRouter();
  const id = router.query.id;

  const { product, getProduct } = useProduct();
  useEffect(() => {
    getProduct(String(id));
  }, []);

  return (
    <div className="mx-auto max-w-7xl lg:px-10 lg:py-5 bg-white">
      <div className="flex flex-col lg:flex-row lg:p-5">
        <div className="lg:w-1/3 lg:pr-5">
          <ImageDetail product={product} />
        </div>
        <div className="lg:w-1/3 scroll-smooth px-3 py-3 sm:px-5 lg:px-0">
          <InformationProduct product={product} />
        </div>
        <div className="w-1/3 hidden lg:block">
          <CartInformation />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
