import _ from 'lodash';
import CardSkeleton from './components/CardSkeleton';

const BaseOnSearchSkeleton = () => {
  return (
    <div className="py-3">
      <div className="h-2.5 bg-base-100 rounded-full dark:bg-base-100 w-72 mb-4" />
      <div className="carousel rounded-box gap-3 mt-5 py-3">
        {_.times(12, (i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
};

export default BaseOnSearchSkeleton;
