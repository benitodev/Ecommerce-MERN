import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  Quantity,
  QuantityContainer,
} from '../styled-components/quantityProduct.styled';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useQuantity } from '../../../hooks';
import { OptionsContext } from '../../../context/OptionsContext';

const pointerStyle = { cursor: 'pointer' };

const QuantityProduct = ({ idObject }: { idObject: string }) => {
  const { subtract, quantity, add } = useQuantity();
  const { setOptions } = useContext(OptionsContext);
  useEffect(() => {
    setOptions((items) => {
      return { ...items, quantity };
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
