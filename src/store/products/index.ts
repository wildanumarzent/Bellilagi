import { create } from 'zustand';
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
    set(() => ({ loading: true }));
    const res = await getProductList();
    setTimeout(() => {
      set(() => ({
        products: res.data.map((product) => {
          return {
            id: product.id,
            title: product.title,
            price: parseInt(product.price),
            special_price: parseInt(product.special_price),
            image: product.image,
            stock: 0,
            total_sold: product.sold,
            discount: parseInt(product.discount),
            location: product.city,
            rating: parseInt(product.ratting),
          };
        }),
        loading: false,
        status: null,
      }));
    }, 2000);
  },
}));

export default useProducts;
