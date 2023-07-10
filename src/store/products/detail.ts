import { create } from 'zustand';
import { getProduct } from './actions';
import { title } from 'process';

interface ProductState {
  product?: IProductDetail;
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  selectedColor?: VariantColor | null;
  selectedSize?: VariantSize;
  getProduct: (id: string) => void;
  changeColor: (params: string) => void;
  changeSize: () => void;
}

const useProduct = create<ProductState>((set, get) => ({
  product: undefined,
  loading: false,
  status: null,
  selectedColor: null,
  getProduct: async (id: string) => {
    const product = await getProduct(id);
    console.log(product);

    set(() => ({
      product: product.data,
      loading: false,
      status: 'SUCCESS',
    }));
  },
  changeColor: (params) => {
    const changDataColor = JSON.parse(params);
    set((state: any) => {
      return {
        selectedColor: changDataColor,
        product: { ...state.product, title: `${state.product?.title} - ${changDataColor?.title}` },
      };
    });
  },
  changeSize: () => {},
}));

export default useProduct;
