import { create } from 'zustand';
import { getProductByCategories } from './actions';

interface ProductState {
  productCategories?: IProduct[];
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  getProduct: (id: number) => void;
}

const useProductByCategories = create<ProductState>((set, get) => ({
  productCategories: [],
  loading: false,
  status: null,
  getProduct: async (id:number) => {
    set(() => ({ loading: true }));
    const res = await getProductByCategories(id);
    set(() => ({
      productCategories: res.data.map((product) => {
        return {
          id: product.id,
          title: product.name,
          image: product.product_image_path,
          total_sold: product.total_terjual,
          no_product:product.no_product,
          location: product.address,
          link_affiliate:product.link_affiliate,
          rating: product.rating,
        };
      }),
      loading: false,
      status: null,
    }));
  },
  
}));

export default useProductByCategories;
