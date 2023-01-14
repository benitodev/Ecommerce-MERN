import { CartRequest, CartResponse } from '../../models';
import { apiSlice } from '../api/apiSlice';

export const cartSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    cart: builder.query<CartResponse, string>({
      query: (id) => ({
        url: `cart/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useCartQuery } = cartSlice;
