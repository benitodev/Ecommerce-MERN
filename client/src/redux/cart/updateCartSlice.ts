import {
  Cart,
  Product,
  ProductCartReference,
  ProductForCartRequest,
  User,
} from '../../models';
import { CART_ROUTES } from '../../models/cart.routes';
import { apiSlice } from '../api/apiSlice';

export type CartRequestTypes = 'add' | 'remove';

export interface UpdateCartResponse {
  cart: {
    user: User['id'];
    products: Array<ProductCartReference>;
    id: Cart['id'];
  };
}
export interface updateCartRequest {
  type: CartRequestTypes;
  quantity: number;
  userId: string;
  product: ProductForCartRequest;
  size: string;
  color: string;
}

export interface UpdateCartRemoveRequest {
  type: CartRequestTypes;
  userId: string;
  productId: string;
}

export const updateCartSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateCart: builder.mutation<
      UpdateCartResponse,
      updateCartRequest | UpdateCartRemoveRequest
    >({
      query: (body) => ({
        url: CART_ROUTES.CART,
        method: 'PUT',
        body,
      }),
    }),
  }),
});

export const { useUpdateCartMutation } = updateCartSlice;
