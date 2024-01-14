import mockapiClient from '@/services/client';
import { API_GET_CATEGORIES_FASHION, API_GET_CATEGORY_OTHER } from '@/constants/api';

export const getCategories = async (): Promise<CategoryResponse> => {
  return mockapiClient.get(API_GET_CATEGORIES_FASHION).then((res) => res as CategoryResponse);
};

export const getOtherCategories = async (): Promise<CategoryResponse> => {
  return mockapiClient.get(API_GET_CATEGORY_OTHER).then((res) => res as CategoryResponse);
};
