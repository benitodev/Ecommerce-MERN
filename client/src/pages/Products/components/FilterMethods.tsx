import Slider from '@mui/material/Slider';
import { Container, Title } from '../styled-components/FilterMethods';
import { Box, Typography } from '@mui/material';
import FormInputSelect from '../../../components/forms/FormInputSelect';
import { CategoryTypes, Size } from '../../../models';
import { useNavigate } from 'react-router-dom';

const marks = [
  { label: '10$', value: '20' },
  { label: '20$', value: '20' },
  { label: '30$', value: '30' },
];

const colors = ['pink', 'purple', 'orange'];
const categories: CategoryTypes[] = [
  'dress',
  'clothes',
  'shoes',
  'bags',
  'accessories',
];
const size: Size[] = ['S', 'M', 'L', 'XL', 'XS', 'XXL'];

const prices = ['Newest', 'Asc', 'Desc'];

const FilterMethods = () => {
  const navigate = useNavigate();
  
  return (
    <Container>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', gap: '20px' }}
      >
        <Title>Filter Products:</Title>
        <FormInputSelect label="Category" elements={categories} />
        <FormInputSelect label="Size" elements={size as string[]} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          gap: '20px',
        }}
      >
        <Title>Price</Title>
      
        <FormInputSelect
          styles={{ minWidth: '110px' }}
          label="Size"
          elements={prices}
        />
      </Box>
    </Container>
  );
};
export default FilterMethods;
