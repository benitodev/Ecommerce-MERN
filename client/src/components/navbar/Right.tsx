import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import { MenuItem, Span } from './styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useAuth from '../../hooks/useAuth.hook';
import { useCartQuery } from '../../redux/cart/cartSlice';
import { useAppDispatch } from '../../hooks';
import { clearCredentials } from '../../redux/login/authSlice';

const Right = () => {
  const { user } = useAuth();
  const { data } = useCartQuery(user?.id);
  const dispatch = useAppDispatch();
  const cartItems = data?.cart?.products.length;
  const handleLogout = () => {
    dispatch(clearCredentials());
  };
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <MenuItem>
        <Link to="/register">REGISTER</Link>
      </MenuItem>

      <MenuItem>
        {!user.id && <Link to="/login">SIGN IN</Link>}
        {user.id && <Span onClick={handleLogout}>LOGOUT</Span>}
      </MenuItem>

      <MenuItem>
        <Link to="/wishlist" color="black">
          <Badge>
            <FavoriteBorderIcon
              sx={{ marginRight: '20px', fontSize: '32px' }}
            />
          </Badge>
        </Link>

        <Link to="/basket">
          <Badge badgeContent={cartItems} color={'success'}>
            <ShoppingCartIcon sx={{ fontSize: '32px' }} />
          </Badge>
        </Link>
      </MenuItem>
    </Box>
  );
};
export default Right;
