import create from 'zustand';
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
    const banners = await getBanners();
    set(() => ({
      loading: false,
      status: null,
      banners: banners.map((banner: IBanners) => {
        return {
          image: banner.image,
        };
      }),
    }));
  },
}));

export default useBannerState;
