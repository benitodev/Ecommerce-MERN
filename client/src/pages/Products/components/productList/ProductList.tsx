import { useParams } from 'react-router-dom';
import ProductItem from '../../../../components/products/ProductItem';
import { useProductsQuery } from '../../../../redux/product/productsApiSlice';
import { ItemContainer } from '../../../../styled-components';

const ProductList = () => {
  const { category } = useParams();

  const { data } = useProductsQuery(category || '');
  return (
    <ItemContainer>
      {data?.products.map((product) => (
        <ProductItem product={product} key={product.id}></ProductItem>
      ))}
      <></>
    </ItemContainer>
  );
};
export default ProductList;
