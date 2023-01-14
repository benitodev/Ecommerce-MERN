import { GetProductsResponse } from '../../models';
import { apiSlice } from '../api/apiSlice';
import { PRODUCT_ENDPOINTS } from './product.endpoints';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    products: builder.query<GetProductsResponse, string>({
      query: (category) => ({
        url: `${PRODUCT_ENDPOINTS.PRODUCTS}/` + category,
        method: 'GET',
      }),
    }),
  }),
});

export const { useProductsQuery } = productsApiSlice;
