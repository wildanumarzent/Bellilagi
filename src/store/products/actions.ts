import mockapiClient from '@/services/client';
import { API_GET_PRODUCTS, API_GET_PRODUCT_CATEGORIES } from '@/constants/api';

export const getProductList = async (search:string): Promise<IProductResponse> => {
  return mockapiClient.get(API_GET_PRODUCTS+search).then((res) => res as IProductResponse);
};

export const getProductByCategories = async (id: number, search:string): Promise<ProductDetailResponse> => {
  return mockapiClient.get(API_GET_PRODUCT_CATEGORIES + id+`?search=${search}`).then((res) => res as ProductDetailResponse);
};
