import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  Quantity,
  QuantityContainer,
} from '../styled-components/quantityProduct.styled';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useQuantityHook } from '../../../hooks';
import { OptionsSelectedContext, UserContext } from '../context/OptionsContext';
import { OptionActions } from '../../../reducers/OptionsReducer';

const pointerStyle = { cursor: 'pointer' };

interface Props {
  distpatch: React.Dispatch<OptionActions>;
}
const QuantityProduct = ({ distpatch }: Props) => {
  const { subtract, quantity, add } = useQuantityHook();

  useEffect(() => {
    distpatch({
      type: 'add',
      payload: { key: 'quantity', value: quantity },
    });
  }, [quantity]);
  return (
    <QuantityContainer>
      <RemoveIcon
        onClick={() => {
          subtract();
        }}
        sx={pointerStyle}
      />
      <Quantity>{quantity}</Quantity>
      <AddIcon
        onClick={() => {
          add();
        }}
        sx={pointerStyle}
      />
    </QuantityContainer>
  );
};
export default QuantityProduct;
