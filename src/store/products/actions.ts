import mockapiClient from '@/services/client';
import { API_GET_PRODUCTS } from '@/constants/api';

export const getProductList = async (): Promise<IProduct> => {
  return mockapiClient.get(API_GET_PRODUCTS).then((res) => res.data as IProductResponse);
};

export const getProduct = async (id: string): Promise<IProductDetail> => {
  return mockapiClient.get(API_GET_PRODUCTS + id).then((res) => res.data as ProductDetailResponse);
};
