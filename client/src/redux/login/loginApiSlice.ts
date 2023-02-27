import { User } from '../../models';
import { apiSlice } from '../api/apiSlice';

export interface LoginResponse {
  user: {
    id: string;
    name: string;
    isAdmin: boolean;
  };
  accessToken: string;
  refreshToken: string;
}
export interface LoginRequest {
  email: string;
  password: string;
}

export const loginApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: 'user/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = loginApiSlice;
