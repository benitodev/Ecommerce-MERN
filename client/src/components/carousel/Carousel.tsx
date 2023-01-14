import Carousel from 'react-material-ui-carousel';
import Box from '@mui/material/Box';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import NavigateBeforeOutlinedIcon from '@mui/icons-material/NavigateBeforeOutlined';
import {
  DescriptionContent,
  Img,
  ImgContainer,
  Slide,
  SlideContent,
  TitleContent,
} from './styled-components';
import Button from '@mui/material/Button';
import { sliderItems } from '../../pages/Home/data';
import { Link } from 'react-router-dom';

const MainCarousel = () => {
  return (
    <Carousel
      sx={{ height: '100vh' }}
      PrevIcon={
        <NavigateBeforeOutlinedIcon sx={{ width: '30px', height: '30px' }} />
      }
      NextIcon={
        <NavigateNextOutlinedIcon sx={{ width: '30px', height: '30px' }} />
      }
      navButtonsProps={{
        style: {
          opacity: 1,
          color: 'black',
          backgroundColor: 'transparent',
        },
      }}
    >
      {sliderItems.map((item, i) => (
        <Slide bg={item.bg} key={i}>
          <ImgContainer>
            <Img src={item.img} />
          </ImgContainer>
          <SlideContent>
            <TitleContent>{item.title}</TitleContent>
            <DescriptionContent>{item.desc}</DescriptionContent>
            <Link to="/shop">
              <Button variant="outlined" sx={{ color: 'black' }}>
                Show more
              </Button>
            </Link>
          </SlideContent>
        </Slide>
      ))}
    </Carousel>
  );
};
export default MainCarousel;
