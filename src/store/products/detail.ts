import create from 'zustand';
import { getProduct } from './actions';

interface ProductState {
  product?: IProductDetail;
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  getProduct: (id: string) => void;
}

const useProduct = create<ProductState>((set) => ({
  product: undefined,
  loading: false,
  status: null,
  getProduct: async (id: string) => {
    const product = await getProduct(id);
    set(() => ({
      product: product?.data,
      loading: false,
      status: 'SUCCESS',
    }));
  },
}));

export default useProduct;
