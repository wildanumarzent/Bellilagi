import create from 'zustand';
import { getProductList } from './actions';

interface ProductsState {
  products: IProduct[];
  loading: boolean;
  status?: 'SUCCESS' | 'FAILURE' | null;
  getProducts: () => void;
}

const useProducts = create<ProductsState>((set) => ({
  products: [],
  loading: false,
  status: null,
  getProducts: async () => {
    const res = await getProductList();
    set(() => ({
      products: res.map((product) => {
        return {
          id: product.id,
          title: product.title,
          price: product.price,
          special_price: product.special_price,
          image: product.image,
          stock: 0,
          total_sold: product.sold,
          discount: product.discount,
          location: product.city,
          ratting: product.ratting,
        };
      }),
      loading: false,
      status: null,
    }));
  },
}));

export default useProducts;
