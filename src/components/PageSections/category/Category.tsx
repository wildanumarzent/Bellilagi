import ServiceCard from './component/ServiceCard';
import CategoryCard from './component/CategoryCard';
import TabTopup from './component/TabTopup';
import BannerContent from '../Hero';
import CategoryMobile from './CategoryMobile/CategoryMobile';

const Category = () => {
  return (
    <>
      <CategoryMobile />
      <div className="bg-white lg:flex flex-col justify-start border mt-3 rounded-lg shadow-md hidden">
        <div className=" hidden lg:flex">
          <CategoryCard />
          <TabTopup />
        </div>
        <div className="pr-16">
          <ServiceCard />
        </div>
      </div>
      <hr className="my-3" />
    </>
  );
};

export default Category;
