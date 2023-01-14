import FilterMethods from './components/FilterMethods';
import ProductList from './components/productList/ProductList';
import { Container, Title } from './styled-components/Products';

const Products = () => {
  return (
    <Container>
      <Title>All categories</Title>
      <FilterMethods />
      <ProductList />
    </Container>
  );
};
export default Products;
