import { Product } from '../../../models';
import {
  Container,
  ImageContainer,
  Img,
} from '../styled-components/BasketList';
import CloseIcon from '@mui/icons-material/Close';
import ProductBasket from './BasketProduct';
import { useUpdateCartMutation } from '../../../redux/cart/updateCartSlice';
import { useAuth } from '../../../hooks';
import { useCartQuery } from '../../../redux/cart/cartSlice';

interface Props {
  product: Product;
  quantity: number;
  id: string;
  userId: string;
}

const BasketList = ({ product, quantity, id, userId }: Props) => {
  const [removeProduct, data] = useUpdateCartMutation();
  const { user } = useAuth();
  const { refetch } = useCartQuery(user.id);
  console.log(data.isError);
  const handleDeleteCart = async () => {
    await removeProduct({
      type: 'remove',
      userId,
      productId: id,
    });
    refetch();
  };
  const productProps = {
    id,
    title: product.title,
    description: product.description,
    price: product.price,
    size: product.size,
    quantity,
  };
  return (
    <Container key={product.id}>
      <ImageContainer>
        <Img src={product.url} />
      </ImageContainer>
      <ProductBasket {...productProps} />
      <CloseIcon
        onClick={handleDeleteCart}
        sx={{
          position: 'absolute',
          top: '0',
          right: '0',
          cursor: 'pointer',
        }}
      />
    </Container>
  );
};
export default BasketList;
