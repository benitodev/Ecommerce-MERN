import React, { createContext, useCallback, useContext, useState } from 'react';
// import React, {
//   Dispatch,
//   SetStateAction,
//   createContext,
//   useContext,
//   useState,
// } from 'react';

// export interface initOptions {
//   size: string | null;
//   color: string | null;
//   quantity: number | null;
// }

// export interface Options {
//   options: {
//     size: string | null;
//     color: string | null;
//     quantity: number | null;
//   } | null;
//   setValue: (key: string | null, value: string | number | null) => void;
// }

// // type OptionsTruth = [
// //   OptionValues,
// //   React.Dispatch<React.SetStateAction<OptionValues>>
// // ];

// type OptionsState = Omit<Options, 'setValue' | 'product'>;

// // const initialValues: Options = {
// //   options: {
// //     size: '',
// //     color: 'red',
// //     quantity: 1,
// //   },
// //   setValue: (key, value) => {},
// // };

// // const OptionValues: Options['options'] = {
// //   size: '',
// //   color: 'red',
// //   quantity: 1,
// // };

// export const OptionsContext = createContext<Options | undefined>(undefined);

// export const OptionsContextProvider = ({
//   children,
// }: {
//   children: React.ReactNode;
// }) => {
//   const [options, setOptions] = useState<Options['options']>(null);
//   console.log(options);
//   const setValue: Options['setValue'] = (
//     key: string | null,
//     value: string | number | null
//   ) => {
//     console.log('HOLAAAAAA', key, value);
//     setOptions({ ...options, [key]: value } as Options['options']);
//   };

//   return (
//     <OptionsContext.Provider value={{ options, setValue }}>
//       {children}
//     </OptionsContext.Provider>
//   );
// };
// export const useSelectOption = () => useContext(OptionsContext);

// export default OptionsContext;

// import { createContext, useContext, useState } from 'react';

// type Context = {
//   selectedId: number | null;
//   changeValue: (value: number | null) => void;
// };

// export const SelectedContext = createContext<Context>({} as Context);

// interface Props {
//   children: React.ReactNode | JSX.Element;
// }

// export const SelectedContextProvider: React.FC<Props> = ({
//   children,
// }: Props) => {
//   const [selectedId, setId] = useState(null);
//   const changeValue = (value: number | null) => {
//     setId(value);
//   };
//   return (
//     <SelectedContext.Provider value={{ selectedId, changeValue }}>
//       {children}
//     </SelectedContext.Provider>
//   );
// };
// export const useStore = () => useContext(SelectedContext);
// export enum OptionsContent {
//   size =
// }

// setOptions: React.Dispatch<
//   React.SetStateAction<{
//     size: string;
//     color: string;
//     quantity: number;
//   }>
// >;

export interface OptionValues {
  size: string;
  color: string;
  quantity: number;
  category?: string;
  price?: string;
}

export interface OptionsSelectedContext {
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
// export const OptionsSelectedContext = createContext<OptionsSelectedContext>({
//   options: {
//     color: '',
//     size: '',
//     quantity: 0,
//   },
//   setOptions: () => {},
// });

// export const OptionsSelectedContext = createContext(
//   {} as OptionsSelectedContext
// );

// export const OptionsSelectedProvider = ({
//   children,
// }: {
//   children: React.ReactNode | JSX.Element;
// }) => {
//   const [options, setOptions] = useState<OptionValues | null>(null);
//   console.log(options);
//    setOptions((prevState) => prevState);

//   return (
//     <OptionsSelectedContext.Provider value={{ options, setOptions }}>
//       {children}
//     </OptionsSelectedContext.Provider>
//   );
// };
// export const useOptions = () => useContext(OptionsSelectedContext);

type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

// export const UserContext = createContext<UserContextType | null>(null)
export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
