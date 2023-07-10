import useProduct from '@/store/products/detail';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import ImageDetail from './components/ImageDetail';
import InformationProduct from './components/InformationProduct';
import CartInformation from './components/InformationCart';
import ContentReview from './components/ContentReview';
import UserReview from './components/UserReview';
import FilterReview from './components/FilterReview';

const DetailProduct = () => {
  const router = useRouter();
  const id = router.query.id;

  const { product, getProduct } = useProduct();
  useEffect(() => {
    getProduct(String(id));
  }, []);

  return (
    <div className="mx-auto max-w-7xl lg:px-10 lg:py-5 bg-white">
      <div className="flex flex-col lg:flex-row lg:p-5 relative">
        <div className="lg:w-1/3 lg:pr-5">
          <ImageDetail product={product} />
        </div>
        <div className="lg:w-1/3 overflow-auto h-[500px] px-3 py-3 sm:px-5 lg:px-0">
          <InformationProduct product={product} />
        </div>
        <div className="w-1/3 hidden lg:block ">
          <CartInformation />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/5 lg:flex flex-col hidden">
          <span className="text-xl font-bold">Ulasan Pembeli</span>
          <FilterReview />
        </div>
        <div className="lg:w-1/2">
          <ContentReview data={product?.content_reviews} />
          <UserReview data={product?.user_reviews} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
