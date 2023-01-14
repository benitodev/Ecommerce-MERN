import { useWishlistHook } from '../../hooks';
import useAppDispatch from '../../hooks/useAppDispatch';
import WishItem from './components/WishItem';
import {
  Container,
  FlexContainer,
  Span,
  Title,
  WishContainer,
} from './styled-components/wishlist';

const Wishlist = () => {
  const wishlist = useWishlistHook();
  const itemsCount = wishlist.length;
  return (
    <Container>
      <Title>Wishlist</Title>
      <Span>{itemsCount} PIECIES</Span>
      <WishContainer>
        <FlexContainer>
          {wishlist.length > 0 &&
            wishlist.map((wishlistItem) => (
              <WishItem key={wishlistItem.id} item={wishlistItem} />
            ))}
        </FlexContainer>
      </WishContainer>
    </Container>
  );
};
export default Wishlist;
