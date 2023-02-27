import { useParams } from 'react-router-dom';
import { useProductQuery } from '../../redux/product/productApiSlice';
import {
  ColorContainer,
  ColorTitle,
  Container,
  Description,
  FilterColor,
  Img,
  ImgContainer,
  InfoContainer,
  Price,
  ProductOptions,
  Title,
} from './styled-components/singleProduct.styled';
import FormInputSelect from '../../components/forms/FormInputSelect';
import AddToBag from './components/AddToBag';
import { useUpdateCartMutation } from '../../redux/cart/updateCartSlice';
import { useAuth } from '../../hooks';
import { useContext, useReducer, useState } from 'react';
import { OptionsReducer } from '../../reducers/OptionsReducer';
import { OptionsContext } from '../../context/OptionsContext';
import { useCartQuery } from '../../redux/cart/cartSlice';

export interface Options {
  size: string;
  color: string;
  quantity: number;
}

const SingleProduct = () => {
  const { user } = useAuth();
  const { id } = useParams();
  const { data } = useProductQuery(id as string);
  const { refetch } = useCartQuery(user?.id);
  const { options, setOptions } = useContext(OptionsContext);

  const product = data?.product;
  const [updateCart, dataCart] = useUpdateCartMutation();

  const addProductToBag = async () => {
    if (product && Object.keys(product).length !== 0 && user.id) {
      console.log(user.id);
      const { size, stock, ...productForCart } = { ...product };

      if (options) {
        await updateCart({
          type: 'add',
          userId: user.id,
          product: productForCart,
          color: options.color ?? 'red',
          size: options.size ?? 'S',
          quantity: options.quantity ?? 1,
        });
        refetch();
      }
    }
  };
  return (
    <>
      {product && Object.keys(product).length !== 0 && (
        <Container>
          <ImgContainer>
            <Img src={product.url} />
          </ImgContainer>

          <InfoContainer>
            <Title>{product.title}</Title>
            <Description>{product.description}</Description>
            <Price>AUD {product.price}</Price>

            <ProductOptions>
              <ColorContainer>
                <ColorTitle>Color: </ColorTitle>

                <FilterColor color="gray" />
                <FilterColor color="red" />
                <FilterColor color="pink" />
              </ColorContainer>
              <FormInputSelect
                id={product.id}
                label="Size"
                elements={product.size as string[]}
                styles={{ width: '60%' }}
              />
            </ProductOptions>

            <AddToBag addProductToBag={addProductToBag} product={product} />
          </InfoContainer>
        </Container>
      )}
    </>
  );
};
export default SingleProduct;
