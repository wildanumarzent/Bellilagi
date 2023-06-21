import create from 'zustand';
import { getProduct } from './actions';

interface ProductState {
  product: IProductDetail | null;
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  getProduct: (id: string) => void;
}

const useProduct = create<ProductState>((set) => ({
  product: null,
  loading: false,
  status: null,
  getProduct: async (id: string) => {
    const product = await getProduct(id);
    set(() => ({
      product: product,
      loading: false,
      status: 'SUCCESS',
    }));
  },
}));

export default useProduct;
