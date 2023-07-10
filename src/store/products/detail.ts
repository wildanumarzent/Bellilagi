import { create } from 'zustand';
import { getProduct } from './actions';
import { title } from 'process';

interface ProductState {
  product?: IProductDetail;
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  selectedColor?: VariantColor | null;
  selectedSize?: VariantSize | null;
  getProduct: (id: string) => void;
  changeColor: (params: string) => void;
  changeSize: (params: string) => void;
}

const useProduct = create<ProductState>((set, get) => ({
  product: undefined,
  loading: false,
  status: null,
  selectedColor: null,
  selectedSize: null,
  getProduct: async (id: string) => {
    const product = await getProduct(id);
    set(() => ({
      product: product.data,
      loading: false,
      status: 'SUCCESS',
    }));
  },
  changeColor: (params) => {
    const changDataColor = JSON.parse(params);
    set((state) => {
      return {
        selectedColor: changDataColor,
        // product: { ...state.product, title: `${state.product?.title} - ${changDataColor?.title}` },
      };
    });
  },
  changeSize: (params) => {
    const changeDataSize = JSON.parse(params);
    set((state) => {
      return {
        selectedSize: changeDataSize,
        // product: { ...state.product, title: `${state.product?.title} - ${changDataColor?.title}` },
      };
    });
  },
}));

export default useProduct;
