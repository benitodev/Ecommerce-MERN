import { useAuthHook } from '../../hooks';
import { Cart, ProductCartRef, ProductItem } from '../../models';
import { useCartQuery } from '../../redux/cart/cartSlice';
import BasketList from './components/BasketList';
import Summary from './components/Summary';
import {
  BagContainer,
  BasketContainer,
  Container,
  Span,
  Title,
  TitleContainer,
} from './styled-components/ShoppingBag.styled';
const ShoppingBag = () => {
  const auth = useAuthHook();
  const { user } = auth;
  const { data, isError } = useCartQuery(user.id);
  const products: ProductCartRef[] = data?.cart.products!;
  const summaryArray = data?.cart.products!.map((obj) => {
    const { product } = obj;
    return product.price;
  });
  return (
    <Container>
      <BagContainer>
        <TitleContainer>
          <Title>SHOPPING BAG</Title>
        </TitleContainer>
        <BasketContainer>
          {Array.isArray(products) &&
            products.map((obj) => {
              console.log(obj);
              return (
                <BasketList
                  product={obj.product}
                  key={obj.product.id}
                  quantity={obj.quantity}
                  id={obj._id}
                  userId={user.id}
                />
              );
            })}
        </BasketContainer>
        {summaryArray && summaryArray.length > 0 ? (
          <Summary summaryArray={summaryArray} />
        ) : (
          <Summary summaryArray={[0]} />
        )}
      </BagContainer>
    </Container>
  );
};
export default ShoppingBag;
