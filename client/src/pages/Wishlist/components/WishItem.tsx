import { Link } from 'react-router-dom';
import { Product } from '../../../models';
import {
  ActionsContainer,
  ButtonContainer,
  Container,
  Img,
  ImgContainer,
  Info,
  InfoContainer,
  Label,
  LinkContainer,
  Price,
  PriceContainer,
  Text,
  TextMarked,
} from '../styled-components/wishItem';
import CloseIcon from '@mui/icons-material/Close';
import { removeToWishList } from '../../../redux/wishlist/wishlistSlice';
import { useAppDispatch } from '../../../hooks';
interface Props {
  item: Product;
}
const WishItem = ({ item }: Props) => {
  const wishDistpatch = useAppDispatch();

  const handleDeleteItem = () => {
    console.log(item.id);
    wishDistpatch(removeToWishList(item.id));
  };
  return (
    <Container>
      <LinkContainer>
        <Link to={item.id}>
          <ImgContainer>
            <Img src={item.url} />
          </ImgContainer>
          <InfoContainer>
            <Label />
            <Info>
              <TextMarked>{item.title}</TextMarked>
              <Text>{item.description}</Text>
            </Info>
            <PriceContainer>
              <Price>AED {item.price}</Price>
            </PriceContainer>
          </InfoContainer>
        </Link>
      </LinkContainer>
      <ButtonContainer onClick={handleDeleteItem}>
        <CloseIcon />
      </ButtonContainer>
      <ActionsContainer></ActionsContainer>
    </Container>
  );
};
export default WishItem;
