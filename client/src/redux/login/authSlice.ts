import { createSlice } from '@reduxjs/toolkit';
import {
  clearLocalStorage,
  persistLocalStorage,
} from '../../utils/LocalStorage';
import { LoginResponse } from './loginApiSlice';
import { RootState } from '../store';

const key = 'auth';

const EmptyAuthState: LoginResponse = {
  user: {
    id: '',
    email: '',
    name: '',
    products: [],
    isAdmin: false,
    createdAt: '',
    updatedAt: '',
  },
  accessToken: '',
};
const authSlice = createSlice({
  name: 'auth',
  initialState: sessionStorage.getItem('auth')
    ? JSON.parse(sessionStorage.getItem('auth') as string)
    : EmptyAuthState,
  reducers: {
    setCredentials: (_state, action) => {
      persistLocalStorage<LoginResponse>(key, action.payload);
      return action.payload;
    },
    updateCredentials: (state, action) => {
      const newCredentials = { ...state, ...action.payload };
      persistLocalStorage<LoginResponse>(key, newCredentials);
      return newCredentials;
    },
    clearCredentials: (state, action) => {
      clearLocalStorage(key, sessionStorage);
      return EmptyAuthState;
    },
  },
});

export const selectCurrentUser = (state: RootState) =>
  state.auth as LoginResponse;

export const { clearCredentials, setCredentials, updateCredentials } =
  authSlice.actions;

export default authSlice.reducer;
