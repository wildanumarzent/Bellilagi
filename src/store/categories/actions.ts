import mockapiClient from '@/services/client';
import { API_GET_CATEGORIES, API_GET_CATEGORY_IMAGE } from '@/constants/api';

export const getCategories = async (): Promise<ICategory> => {
  return mockapiClient.get(API_GET_CATEGORIES).then((res) => res.data as categoryResponse);
};

export const getImageCategories = async (): Promise<IMGCategory> => {
  return mockapiClient.get(API_GET_CATEGORY_IMAGE).then((res) => res.data as IMGCategoryResponse);
};
