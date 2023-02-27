export interface FormState {
  err: boolean;
  message: string;
  status: number;
}

export enum FormTypes {
  LOGIN = 'login',
  REGISTER = 'register',
}

export const initialForStatus = {
  err: false,
  message: '',
  status: 0,
};
