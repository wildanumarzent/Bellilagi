import { create } from 'zustand';
import { getCategories, getImageCategories } from './actions';

interface ICategoryState {
  categories: ICategory[];
  IMGCategories: IMGCategory[];
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  getCategories: () => void;
  getIMGCategories: () => void;
}

const useCategeries = create<ICategoryState>((set) => ({
  categories: [],
  IMGCategories: [],
  loading: false,
  status: null,
  getCategories: async () => {
    set(() => ({ loading: true }));
    const result = await getCategories();
    setTimeout(() => {
      set(() => ({
        categories: result.data.map((category) => {
          return {
            title: category.title,
            image: category.image,
          };
        }),
        loading: false,
        status: null,
      }));
    }, 2000);
  },
  getIMGCategories: async () => {
    set(() => ({ loading: true }));
    const result = await getImageCategories();
    setTimeout(() => {
      set(() => ({
        IMGCategories: result.data.map((imgcategory) => {
          return {
            image: imgcategory.image,
          };
        }),
      }));
    }, 1000);
    set(() => ({ loading: false }));
  },
}));

export default useCategeries;
