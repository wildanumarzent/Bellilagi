import { create } from 'zustand';
import { loginUser, registerUser } from './actions';
import { toast } from 'react-toastify';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import useHydrated from '@/hooks/useHydrated';

interface AuthState {
  registerData: IUser[];
  isLoggedIn: boolean;
  token: string;
  loading: boolean;
  Register: (params: IUser) => void;
  Login: (params: IUser) => void;
  Logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      registerData: [],
      isLoggedIn: false,
      token: '',
      loading: false,
      Register: async (credentials: IUser) => {
        try {
          const resRegister = await registerUser(credentials);
          if (resRegister) {
            set(() => ({ token: resRegister.token, isLoggedIn: true }));
            const url_login = encodeURI(`${window.location.origin}/`);
            window.location.replace(url_login);
          } else throw resRegister;
        } catch (error) {
          toast.error('Terjadi kesalahan');
        }
      },
      Login: async (credentials: IUser) => {
        try {
          const resLogin = await loginUser(credentials);
          if (resLogin) {
            set(() => ({
              token: resLogin.token,
              isLoggedIn: true,
            }));
            const url_login = encodeURI(`${window.location.origin}/`);
            window.location.replace(url_login);
          } else throw resLogin;
        } catch (error) {
          toast.error('Terjadi kesalahan');
        }
      },
      Logout: () => {
        sessionStorage.clear();
        const url_login = encodeURI(`${window.location.origin}/auth/signin`);
        window.location.replace(url_login);
        set(() => ({
          token: '',
          isLoggedIn: false,
        }));
      },
    }),
    {
      name: 'auth-state',
      partialize: ({ token, isLoggedIn }) => ({
        token,
        isLoggedIn,
      }),
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

const useAuth: () => AuthState = () => {
  const store = useAuthStore();
  const isHydrated = useHydrated();
  return isHydrated
    ? store
    : {
        registerData: [],
        isLoggedIn: false,
        authCheck: false,
        token: '',
        loading: false,
        Register: () => null,
        Login: () => null,
        Logout: () => null,
      };
};

export default useAuth;
