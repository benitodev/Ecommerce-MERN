import { useState } from 'react';
import SingleProduct from './SingleProduct';
import {
  OptionValues,
  OptionsSelectedContext,
  UserContextProvider,
} from './context/OptionsContext';
// import { SelectedContextProvider } from './context/OptionsContext';

const OptionContextLayer = () => {
  // const [options, setOptions] = useState<OptionValues>({
  //   size: '',
  //   color: '',
  //   quantity: 1,
  // });
  return <SingleProduct />;
};
export default OptionContextLayer;
