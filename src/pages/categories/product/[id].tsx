import ProductByCategories from '@/components/PageGroups/guest/product/Categories/[id]';
import { getLayout } from '@/layouts';

const Detail = () => {
  return <ProductByCategories />;
      {/* <Analytics/> */}
    
  
};

Detail.getLayout = getLayout;

export default Detail;
