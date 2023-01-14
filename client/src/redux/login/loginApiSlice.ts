import { User } from '../../models';
import { apiSlice } from '../api/apiSlice';

export interface LoginResponse {
  user: User;
  accessToken: string;
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
