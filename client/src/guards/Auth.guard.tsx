import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth.hook';
import { PUBLIC_ROUTES } from '../models/routes';

interface Props {
  privateGuard: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PUBLIC_ROUTES.LOGIN} />;

export const AuthGuard = () => {
  const { user } = useAuth();

  return user.name ? PrivateValidationFragment : PublicValidationFragment;
};

export default AuthGuard;
