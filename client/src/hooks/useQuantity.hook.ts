import { useState } from 'react';

const defaultQuantity = 1;

const useQuantity = () => {
  const [quantity, setQuantity] = useState<number>(defaultQuantity);
  const add = () => {
    setQuantity(quantity + 1);
  };
  const subtract = () => {
    if (quantity === 1) return;
    setQuantity(quantity - 1);
  };
  return { add, subtract, quantity, setQuantity };
};

export default useQuantity;
