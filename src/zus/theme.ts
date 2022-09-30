import create from 'zustand'

interface ThemeState {
  theme: string;
  isDarkmode: boolean;
  setTheme: (val: string) => void;
  reset: (val: string) => void;
}

const useThemeStore = create<ThemeState>((set) => ({
  theme: '',
  isDarkmode: true,
  setTheme: (val: string) => {
    // set(() => ({ theme: val }))
    set({ theme: val, isDarkmode: val === "dracula" })
  },
  reset: () => set({ theme: 'dracula' }),
}))

export default useThemeStore
