import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';

import { sliderItems } from '../../pages/Home/data';
import CarouselItems from './CarouselItems';

const MainCarousel = () => {
  return (
    <Carousel
      sx={{ height: '100vh' }}
      PrevIcon={
        <NavigateBeforeOutlinedIcon
          id="prevButton"
          sx={{ width: '30px', height: '30px' }}
        />
      }
      NextIcon={
        <NavigateNextOutlinedIcon
          id="nextButton"
          sx={{ width: '30px', height: '30px' }}
        />
      }
      navButtonsProps={{
        style: {
          opacity: 1,
          color: 'black',
          backgroundColor: 'transparent',
        },
      }}
    >
      {sliderItems.map((item) => (
        <CarouselItems item={item} key={item.id} />
      ))}
    </Carousel>
  );
};
export default MainCarousel;
