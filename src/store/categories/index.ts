import create from 'zustand';
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
    const result = await getCategories();
    set(() => ({
      categories: result.map((category: ICategory) => {
        return {
          title: category.title,
          image: category.image,
        };
      }),
      loading: false,
      status: null,
    }));
  },
  getIMGCategories: async () => {
    const result = await getImageCategories();
    set(() => ({
      IMGCategories: result.map((imgcategory: IMGCategory) => {
        return {
          image: imgcategory.image,
        };
      }),
    }));
  },
}));

export default useCategeries;
