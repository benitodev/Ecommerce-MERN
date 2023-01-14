import { apiSlice } from '../api/apiSlice';
import { RegisterRequest, RegisterResponse } from './register.type';

export const registerApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (body) => ({
        url: 'user/register',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useRegisterMutation } = registerApiSlice;
