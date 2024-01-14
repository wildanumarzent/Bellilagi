import { create } from 'zustand';
import { getCategories, getOtherCategories } from './actions';

interface ICategoryState {
  categories: ICategory[];
  OtherCategories: ICategory[];
  loading: boolean;
  status: 'SUCCESS' | 'FAILURE' | null;
  getCategories: () => void;
  getOtherCategories: () => void;
}

const useCategeries = create<ICategoryState>((set) => ({
  categories: [],
  OtherCategories: [],
  loading: false,
  status: null,
  getCategories: async () => {
    set(() => ({ loading: true }));
    const result = await getCategories();
    setTimeout(() => {
      set(() => ({
        categories: result.data.map((category) => {
          return {
            id:category.id,
            title: category.name,
            image: category.category_icon_path,
          };
        }),
        loading: false,
        status: null,
      }));
    }, 2000);
  },
  getOtherCategories: async () => {
    set(() => ({ loading: true }));
    const result = await getOtherCategories();
    setTimeout(() => {
      set(() => ({
        OtherCategories: result.data.map((otherCategories) => {
          return {
            id:otherCategories.id,
            title: otherCategories.name,
            image: otherCategories.category_icon_path,
          };
        }),
        loading: false,
      }));
    }, 2000);
  },
}));

export default useCategeries;
