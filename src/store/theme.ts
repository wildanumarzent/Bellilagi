import { create } from 'zustand';

interface ThemeState {
  theme: string;
  isDarkmode: boolean;
  setTheme: (val: string) => void;
  reset: (val: string) => void;
}
const defaultTheme = 'Meteor';
const useThemeStore = create<ThemeState>((set) => ({
  theme: defaultTheme,
  isDarkmode: true,
  setTheme: (val: string) => {
    // set(() => ({ theme: val }))
    set({ theme: val, isDarkmode: false });
  },
  reset: () => set({ theme: defaultTheme }),
}));

export default useThemeStore;
