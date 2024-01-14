import mockapiClient from '@/services/client';
import { API_GET_PRODUCTS, API_GET_PRODUCT_CATEGORIES } from '@/constants/api';

export const getProductList = async (): Promise<IProductResponse> => {
  return mockapiClient.get(API_GET_PRODUCTS).then((res) => res as IProductResponse);
};

export const getProductByCategories = async (id: number): Promise<ProductDetailResponse> => {
  return mockapiClient.get(API_GET_PRODUCT_CATEGORIES + id).then((res) => res as ProductDetailResponse);
};
