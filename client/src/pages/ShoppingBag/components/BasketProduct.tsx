import { Product, Size } from '../../../models';
import {
  Amount,
  OptionTitle,
  OptionValue,
  ProductAmount,
  ProductBox,
  ProductContainer,
  ProductDescription,
  ProductDetails,
  ProductId,
  ProductOptions,
  ProductSeason,
  ProductTitle,
  Span,
} from '../styled-components/BasketProduct';

interface Props {
  title: string;
  description: string;
  id: string;
  price: number;
  size: Array<Size>;
  quantity: number;
}

const BasketProduct = ({
  id,
  title,
  description,
  price,
  size,
  quantity,
}: Props) => {
  return (
    <ProductContainer>
      <ProductDetails>
        <ProductSeason>NEW SEASON</ProductSeason>
        <ProductBox>
          <ProductTitle>{title}</ProductTitle>
          <ProductDescription>{description}</ProductDescription>
          <ProductId>PRODUCT ID: {id}</ProductId>
        </ProductBox>
      </ProductDetails>
      <ProductAmount>
        <Amount>AED {price}</Amount>
        <Span>(Import duties included)</Span>
      </ProductAmount>
      <ProductOptions>
        <OptionTitle>Size</OptionTitle>
        <OptionValue>{size}</OptionValue>
        <OptionTitle>Quantity</OptionTitle>
        <OptionValue>{quantity}</OptionValue>
      </ProductOptions>
    </ProductContainer>
  );
};
export default BasketProduct;
