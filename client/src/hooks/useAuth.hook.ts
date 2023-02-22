import { useAppSelector } from './';
import { selectCurrentUser } from '../redux/login/authSlice';
import { useMemo } from 'react';
const useAuth = (isSuccessLogin?: boolean) => {
  const user = useAppSelector(selectCurrentUser);

  return useMemo(() => user, [user, isSuccessLogin]);
};
export default useAuth;
