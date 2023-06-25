import ServiceCard from './component/ServiceCard';
import CategoryCard from './component/CategoryCard';
import TabTopup from './component/TabTopup';
const Category = () => {
  return (
    <div className="bg-white flex flex-col justify-start border mt-3 rounded-lg shadow-md">
      <div className=" hidden lg:flex">
        <CategoryCard />
        <TabTopup />
      </div>
      <div className="pr-16">
        <ServiceCard />
      </div>
    </div>
  );
};

export default Category;
