import { Product, ProductResponse } from '../../models';
import { apiSlice } from '../api/apiSlice';
import { PRODUCT_ENDPOINTS } from './product.endpoints';

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    product: builder.query<ProductResponse, string>({
      query: (id) => ({
        url: `${PRODUCT_ENDPOINTS.PRODUCT}/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useProductQuery } = productApiSlice;
