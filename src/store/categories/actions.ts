import mockapiClient from '@/services/client';
import { API_GET_CATEGORIES, API_GET_CATEGORY_IMAGE } from '@/constants/api';

export const getCategories = async (): Promise<CategoryResponse> => {
  return mockapiClient.get(API_GET_CATEGORIES).then((res) => res as CategoryResponse);
};

export const getImageCategories = async (): Promise<IMGCategoryResponse> => {
  return mockapiClient.get(API_GET_CATEGORY_IMAGE).then((res) => res as IMGCategoryResponse);
};
