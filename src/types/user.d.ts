interface IUser {
  email: string;
  password: string;
}

interface RegisterResponse {
  id: number;
  token: string;
}

interface LoginResponse {
  token: string;
}
