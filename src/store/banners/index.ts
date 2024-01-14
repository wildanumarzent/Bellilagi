import { create } from 'zustand';
import { getBanners } from './actions';

interface IBannerState {
  banners: IBanners[];
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  getBanners: () => void;
}

const useBannerState = create<IBannerState>((set) => ({
  banners: [],
  loading: false,
  status: null,
  getBanners: async () => {
    set(() => ({ loading: true }));
    const banners = await getBanners();
    // setTimeout(() => {
      set(() => ({
        banners: banners.data.map((banner) => {
          return {
            id:banner.id,
            name:banner.name,
            image:banner.image,
            link:banner.link,
            is_active:banner.is_active,
            banner_image_path:banner.banner_image_path
          };
        }),
        loading: false,
        status: null,
      }));
    // }, 2000);
  },
}));

export default useBannerState;
