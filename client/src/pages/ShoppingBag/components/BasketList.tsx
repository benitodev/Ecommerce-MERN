import { Product } from '../../../models';
import {
  Container,
  ImageContainer,
  Img,
} from '../styled-components/BasketList';
import CloseIcon from '@mui/icons-material/Close';
import ProductBasket from './BasketProduct';
import { useUpdateCartMutation } from '../../../redux/cart/updateCartSlice';

interface Props {
  product: Product;
  quantity: number;
  id: string;
  userId: string;
}

const BasketList = ({ product, quantity, id, userId }: Props) => {
  const [removeProduct, data] = useUpdateCartMutation();
  console.log(data.isError);
  const handleDeleteCart = () => {
    removeProduct({
      type: 'remove',
      userId,
      productId: id,
    });
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
