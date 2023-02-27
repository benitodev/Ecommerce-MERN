import { useWishlist } from '../../hooks';
import useAppDispatch from '../../hooks/useAppDispatch.hook';
import WishItem from './components/WishItem';
import {
  Container,
  FlexContainer,
  Span,
  Title,
  WishContainer,
} from './styled-components/wishlist';

const Wishlist = () => {
  const wishlist = useWishlist();
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
