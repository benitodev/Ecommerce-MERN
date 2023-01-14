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
import { useAuthHook } from '../../hooks';
import { useContext, useReducer, useState } from 'react';
import { OptionsSelectedContext, UserContext } from './context/OptionsContext';
import { OptionsReducer } from '../../reducers/OptionsReducer';

export interface Options {
  size: string;
  color: string;
  quantity: number;
}

const SingleProduct = () => {
  const { id } = useParams();
  const { data } = useProductQuery(id as string);
  const [state, distpatch] = useReducer(OptionsReducer, {
    color: 'red',
    size: 'S',
    quantity: 1,
  });

  const product = data?.product;
  const { user } = useAuthHook();
  const [updateCart, dataCart] = useUpdateCartMutation();

  const addProductToBag = () => {
    if (product && Object.keys(product).length !== 0 && user.id) {
      console.log(user.id);
      const { size, stock, ...productForCart } = { ...product };
      if (state) {
        updateCart({
          type: 'add',
          userId: user.id,
          product: productForCart,
          color: state.color,
          size: state.size,
          quantity: state.quantity,
        });
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
                optionKey="size"
                distpatch={distpatch}
                label="Size"
                elements={product.size as string[]}
                styles={{ width: '60%' }}
              />
            </ProductOptions>

            <AddToBag
              distpatch={distpatch}
              addProductToBag={addProductToBag}
              product={product}
            />
          </InfoContainer>
        </Container>
      )}
    </>
  );
};
export default SingleProduct;
