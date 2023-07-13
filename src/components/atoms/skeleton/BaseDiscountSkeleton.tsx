import CardDiscount from '@/components/PageSections/products/component/CardDiscount';
import _ from 'lodash';
import CardSkeleton from './components/CardSkeleton';

const BaseDiscountSkeleton = () => {
  return (
    <div className="py-3 hidden sm:block animate-pulse">
      <div className="flex">
        <div className="h-2.5 bg-base-100 rounded-full dark:bg-base-100 w-72 mb-4" />
      </div>
      <div className="flex relative">
        <div className="bg-base-200 w-[calc(24% - 6px)] pl-10 pr-40 rounded-lg ">
          <svg
            className="w-[280px] h-[320px] text-gray-200 dark:text-bg-base-100"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div className="carousel rounded-box gap-3 -ml-32 p-3">
          {_.times(12, (i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BaseDiscountSkeleton;
