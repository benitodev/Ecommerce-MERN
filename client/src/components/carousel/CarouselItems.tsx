import {
  DescriptionContent,
  Img,
  ImgContainer,
  Slide,
  SlideContent,
  TitleContent,
} from './styled-components';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

interface Props {
  item: {
    id: number;
    img: string;
    title: string;
    desc: string;
    bg: string;
  };
}

const CarouselItems = ({ item }: Props) => {
  const { title, desc, bg, img } = item;
  return (
    <Slide bg={bg}>
      <ImgContainer>
        <Img src={img} />
      </ImgContainer>
      <SlideContent>
        <TitleContent>{title}</TitleContent>
        <DescriptionContent>{desc}</DescriptionContent>
        <Link to="/shop">
          <Button variant="outlined" sx={{ color: 'black' }}>
            Show more
          </Button>
        </Link>
      </SlideContent>
    </Slide>
  );
};
export default CarouselItems;
