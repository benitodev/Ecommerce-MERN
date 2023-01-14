import { useAppSelectorHook } from './';
import { selectCurrentUser } from '../redux/login/authSlice';
import { useMemo } from 'react';
const useAuth = () => {
  const user = useAppSelectorHook(selectCurrentUser);
  return useMemo(() => user, [user]);
};
export default useAuth;
