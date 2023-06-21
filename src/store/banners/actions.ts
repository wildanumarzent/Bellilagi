import mockapiClient from '@/services/client';
import { API_GET_BANNERS } from '@/constants/api';

export const getBanners = async (): Promise<IBanners> => {
  return mockapiClient.get(API_GET_BANNERS).then((res) => res.data);
};
