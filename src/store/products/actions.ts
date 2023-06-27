import mockapiClient from '@/services/client';
import { API_GET_PRODUCTS } from '@/constants/api';

export const getProductList = async (): Promise<IProductResponse> => {
  return mockapiClient.get(API_GET_PRODUCTS).then((res) => res as IProductResponse);
};

export const getProduct = async (id: string): Promise<ProductDetailResponse> => {
  return mockapiClient.get(API_GET_PRODUCTS + id).then((res) => res as ProductDetailResponse);
};
