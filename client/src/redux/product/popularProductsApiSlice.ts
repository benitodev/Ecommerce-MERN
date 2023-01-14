import { GetProductsResponse } from '../../models';
import { apiSlice } from '../api/apiSlice';
import { PRODUCT_ENDPOINTS } from './product.endpoints';

export const popularProductsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    popularProducts: builder.query<GetProductsResponse, void>({
      query: () => ({
        url: PRODUCT_ENDPOINTS.POPULAR,
        method: 'GET',
      }),
    }),
  }),
});

export const { usePopularProductsQuery } = popularProductsApiSlice;
