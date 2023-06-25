import create from 'zustand';
import { loginUser, registerUser } from './actions';
import { toast } from 'react-toastify';

interface AuthState {
  registerData: IUser[];
  isLoggedIn: boolean;
  authCheck: boolean;
  token: string;
  loading: boolean;
  Register: (params: IUser) => void;
  Login: (params: IUser) => void;
}

const useAuth = create<AuthState>((set) => ({
  registerData: [],
  isLoggedIn: false,
  token: '',
  authCheck: false,
  loading: false,
  Register: async (credentials: IUser) => {
    try {
      const resRegister = await registerUser(credentials);
      if (resRegister) {
        set(() => ({ token: resRegister.token }));
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
}));

export default useAuth;
