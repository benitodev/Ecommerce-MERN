import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models';
import { persistLocalStorage } from '../../utils';
import { RootState } from '../store';

const EmptyWishlistState: Product[] = [];
const key = 'wishlist';
const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: sessionStorage.getItem('wishlist')
    ? JSON.parse(sessionStorage.getItem('wishlist') as string)
    : EmptyWishlistState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<Product>) => {
      const addProduct = [...state, action.payload];
      console.log(action.payload);
      const idValues = addProduct.map((product: Product) => product.id);
      const isDuplicate = idValues.some((id: Product['id'], idx: number) => {
        return idValues.indexOf(id) != idx;
      });
      console.log(isDuplicate);
      if (!isDuplicate) {
        persistLocalStorage(key, addProduct);
      }

      return isDuplicate ? state : addProduct;
    },
    removeToWishList: (state, action: PayloadAction<Product['id']>) => {
      const newState = state.filter(
        (product: Product) => action.payload !== product.id
      );
      persistLocalStorage(key, newState);
      return newState;
    },
  },
});

export const selectCurrentWishlist = (state: RootState) =>
  state.wishlist as Product[];

export const { addToWishlist, removeToWishList } = wishlistSlice.actions;

export default wishlistSlice.reducer;
