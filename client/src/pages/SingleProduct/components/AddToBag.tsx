import { Button } from '@mui/material';
import QuantityProduct from './QuantityProduct';
import FavoriteButton from './FavoriteButton';
import { AddContainer } from '../styled-components/AddtoBag.styled';
import { useAppDispatchHook, useQuantityHook } from '../../../hooks';
import { useContext, useEffect } from 'react';
import { OptionActions } from '../../../reducers/OptionsReducer';
import useAuth from '../../../hooks/useAuth.hook';
import { useNavigate } from 'react-router-dom';
import { PUBLIC_ROUTES } from '../../../models/routes';
import { addToWishlist } from '../../../redux/wishlist/wishlistSlice';
import { Product } from '../../../models';

interface Props {
  addProductToBag: () => void;
  distpatch: React.Dispatch<OptionActions>;
  product: Product;
}

const AddToBag = ({ addProductToBag, distpatch, product }: Props) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const cartDistpatch = useAppDispatchHook();
  const wishListProduct = () => {
    if (user.id === '') {
      navigate('/login');
    }
    console.log(user.name);
    cartDistpatch(addToWishlist(product));
  };
  const handleClick = () => {
    if (user.name) {
      addProductToBag();
    } else {
      navigate(`/${PUBLIC_ROUTES.LOGIN}`);
    }
  };
  return (
    <AddContainer>
      <QuantityProduct distpatch={distpatch} />
      <Button
        onClick={handleClick}
        variant="outlined"
        sx={{
          backgroundColor: '#222',
          color: '#fff',
          borderColor: '#222',
          padding: '10px 15px',
          fontSize: '1rem',
          '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.6)',
          },
        }}
      >
        Add to bag
      </Button>
      <FavoriteButton addToWishList={wishListProduct} />
    </AddContainer>
  );
};
export default AddToBag;
