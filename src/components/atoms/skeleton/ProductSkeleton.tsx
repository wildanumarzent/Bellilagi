import _ from 'lodash';
import Link from 'next/link';
import BannerSkeleton from './BannerSkeleton';
import CardSkeleton from './components/CardSkeleton';
const ProductSkeleton = () => {
  const count = 10;
  return (
    <>
      <div className="animate-pulse">
        <BannerSkeleton />
        <div className="flex flex-wrap justify-center sm:justify-start gap-5 py-9">
          {_.times(12, (i) => (
            <CardSkeleton />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSkeleton;
