import { ImageButton } from '../buttons/BackgroundTransparentButton';
import { Circle, Container, Img, Info } from './styled-components/product';
import ButtonActionsHover from './components/ButtonActionHover';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Product } from '../../models';
import { useAppDispatchHook } from '../../hooks';
import { addToWishlist } from '../../redux/wishlist/wishlistSlice';
const ProductItem = ({ product }: { product: Product }) => {
  const distpatch = useAppDispatchHook();

  const wishListProduct = () => {
    console.log('wishlist product');
    distpatch(addToWishlist(product));
  };
  return (
    <Container>
      <ImageButton
        focusRipple
        key={product.title}
        style={{
          minWidth: '300px',
          height: '40vh',
        }}
      >
        <Img src={product.url} />
        <Info>
          <ButtonActionsHover>
            <ShoppingCartIcon />
          </ButtonActionsHover>
          <Link to={`/product/${product.id}`}>
            <ButtonActionsHover>
              <SearchIcon />
            </ButtonActionsHover>
          </Link>
          <ButtonActionsHover>
            <FavoriteBorderIcon onClick={wishListProduct} />
          </ButtonActionsHover>
        </Info>
      </ImageButton>
    </Container>
  );
};
export default ProductItem;
