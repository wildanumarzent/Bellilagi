import { API_POST_REGISTER, API_POST_LOGIN } from '@/constants/api';
import ReqresClient from '@/services/reqresin';

export const registerUser = async (credentials: IUser): Promise<RegisterResponse> => {
  const result = await ReqresClient.post(API_POST_REGISTER, {
    email: credentials.email,
    password: credentials.password,
  });
  return result.data as RegisterResponse;
};

export const loginUser = async (credential: IUser): Promise<LoginResponse> => {
  const result = await ReqresClient.post(API_POST_LOGIN, {
    email: credential.email,
    password: credential.password,
  });
  return result.data as LoginResponse;
};
