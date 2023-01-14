import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import Button from './Button';
import { Link } from 'react-router-dom';

const images = [
  {
    url: 'https://images.pexels.com/photos/11719056/pexels-photo-11719056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Breakfast',
  },
  {
    url: 'https://images.pexels.com/photos/11719056/pexels-photo-11719056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Burgers',
  },
  {
    url: 'https://images.pexels.com/photos/11719056/pexels-photo-11719056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Camera',
  },
];

export const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: '70vh',
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: '60vh',
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

export const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

export const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

export const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

export const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

type Content = {
  id: number;
  url: string;
  title: string;
};

interface ButtonProps {
  content: Content[];
}

const BackgroundTransparentButton = ({ content }: ButtonProps) => {
  return (
    <Box
      sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%' }}
    >
      {content.map((image) => (
        <ImageButton
          focusRipple
          key={image.title}
          style={{ width: '33.33333333333333%' }}
        >
          <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
          <ImageBackdrop />
          <Image>
            <Link to="/shop" style={{ color: 'white' }}>
              <Button title={image.title} />
            </Link>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
};

export default BackgroundTransparentButton;
