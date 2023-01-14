import { Badge } from '@mui/material';
import Box from '@mui/material/Box';
import { MenuItem } from './styled-components';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useMemo } from 'react';
import useAuth from '../../hooks/useAuth.hook';
import { useCartQuery } from '../../redux/cart/cartSlice';

const Right = () => {
  const { user } = useAuth();
  const { data } = useCartQuery(user.id);
  const numberOfProductCart = data?.cart.products.length;

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}
    >
      <Link to="/register">
        <MenuItem>REGISTER</MenuItem>
      </Link>
      <MenuItem>
        <Link to="/login">SIGN IN</Link>
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
          <Badge badgeContent={numberOfProductCart} color={'success'}>
            <ShoppingCartIcon sx={{ fontSize: '32px' }} />
          </Badge>
        </Link>
      </MenuItem>
    </Box>
  );
};
export default Right;
