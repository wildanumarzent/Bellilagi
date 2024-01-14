import { create } from 'zustand';

interface ThemeState {
  theme: string;
  isDarkmode: boolean;
  logo: string;
  setTheme: (val: string) => void;
  reset: (val: string) => void;
}
const defaultTheme = 'Meteor';
const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
  isDarkmode: true,
  logo: '',
  setTheme: (val: string) => {
    // set(() => ({ theme: val }))
    // set({ theme: val, isDarkmode: false });
    set(() => {
      let img = '';
      if (val === 'Shopee') {
        img = 'assets/img/logo-shopee.png';
      } else if (val === 'Belilagi') {
        img = '/logo_belilagi.jpg';
      } else {
        img = '/logo_belilagi.jpg';
      }
      return {
        theme: val,
        isDarkmode: false,
        logo: img,
      };
    });
  },
  reset: () => set({ theme: defaultTheme }),
}));

export default useThemeStore;
