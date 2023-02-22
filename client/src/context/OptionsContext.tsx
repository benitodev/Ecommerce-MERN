import React, { createContext, useState } from 'react';
import { ProductForCartRequest } from '../models';

export interface OptionValues {
  size?: string;
  color?: string;
  product?: ProductForCartRequest;
  quantity?: number;
  category?: string;
  price?: string;
}

type OptionsProviderProps = {
  children: React.ReactNode;
};

export interface OptionsSelectedType {
  options: OptionValues | null;
  // setValues: () => void;
  setOptions: React.Dispatch<React.SetStateAction<OptionValues | null>>;
}
export enum OptionKeys {
  SIZE = 'size',
  COLOR = 'color',
  QUANTITY = 'quantity',
  CATEGORY = 'category',
  PRICE = 'price',
}

export const OptionsContext = createContext({} as OptionsSelectedType);

export const OptionsContextProvider = ({ children }: OptionsProviderProps) => {
  const [options, setOptions] = useState<OptionValues | null>(null);
  console.log(options);
  return (
    <OptionsContext.Provider value={{ options, setOptions }}>
      {children}
    </OptionsContext.Provider>
  );
};
