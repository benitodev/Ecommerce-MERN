import Box from '@mui/material/Box';
import MainCarousel from '../../components/carousel/Carousel';
import CategoryButtons from '../../components/categories/CategoryButtons';
import PopularProducts from '../../components/products/PopularProducts';

const Home = () => {
  return (
    <Box sx={{ height: '100vh' }}>
      <MainCarousel />
      <CategoryButtons />
      <PopularProducts />
    </Box>
  );
};
export default Home;
