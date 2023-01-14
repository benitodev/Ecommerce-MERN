import { useMemo } from 'react';
import { selectCurrentWishlist } from '../redux/wishlist/wishlistSlice';
import { useAppSelectorHook } from './';

const useWishlist = () => {
  const wishlist = useAppSelectorHook(selectCurrentWishlist);
  return useMemo(() => wishlist, [wishlist]);
};
export default useWishlist;
