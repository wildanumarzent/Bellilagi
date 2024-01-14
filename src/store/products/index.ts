import { create } from 'zustand';
import { getProductList } from './actions';

interface ProductsState {
  products: IProduct[];
  loading: boolean;
  status?: 'SUCCESS' | 'FAILURE' | null;
  valueSearch:string;
  getProducts: (search:string) => void;
}

const useProducts = create<ProductsState>((set) => ({
  products: [],
  loading: false,
  status: null,
  valueSearch:'',
  getProducts: async (search) => {
    set(() => ({ loading: true }));
    set(() => ({ valueSearch: search }));
    const res = await getProductList(search);
    set(() => ({
      products: res.data.map((product) => {
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

export default useProducts;
