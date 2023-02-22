import { useMemo } from 'react';
import { selectCurrentWishlist } from '../redux/wishlist/wishlistSlice';
import { useAppSelector } from './';

const useWishlist = () => {
  const wishlist = useAppSelector(selectCurrentWishlist);
  return useMemo(() => wishlist, [wishlist]);
};
export default useWishlist;
