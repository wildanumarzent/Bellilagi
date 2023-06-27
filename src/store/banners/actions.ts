import mockapiClient from '@/services/client';
import { API_GET_BANNERS } from '@/constants/api';

export const getBanners = async (): Promise<BannerResponse> => {
  return mockapiClient.get(API_GET_BANNERS).then((res) => res);
};
