import { usePopularProductsQuery } from '../../redux/product/popularProductsApiSlice';
import Product from './ProductItem';
import { ItemContainer } from '../../styled-components';
const PopularProducts = () => {
  const { data } = usePopularProductsQuery();
  console.log(data?.products);

  return (
    <ItemContainer>
      {data?.products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </ItemContainer>
  );
};
export default PopularProducts;
