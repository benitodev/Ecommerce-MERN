import Slider from '@mui/material/Slider';
import { Container, Title } from '../styled-components/FilterMethods';
import { Box, Typography } from '@mui/material';
import FormInputSelect from '../../../components/forms/FormInputSelect';
import { CategoryTypes, Size } from '../../../models';
import { useEffect, useReducer } from 'react';
import { OptionsReducer } from '../../../reducers/OptionsReducer';
import { OptionKeys } from '../../../context/OptionsContext';
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
  const [state, distpatch] = useReducer(OptionsReducer, {
    color: 'red',
    size: '',
    quantity: 1,
    category: '',
    price: '',
  });
  useEffect(() => {
    if (state.category !== '') navigate(`/shop/${state.category}`);
  }, [state.category]);
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
        {/* <Slider
          defaultValue={30}
          step={10}
          marks
          min={10}
          max={110}
          sx={{ width: '250px' }}
          valueLabelDisplay="auto"
          valueLabelFormat={(number) => `${number}$`}
        /> */}
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
