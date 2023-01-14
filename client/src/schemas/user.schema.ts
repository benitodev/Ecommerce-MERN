import * as yup from 'yup';

export const defaultValues = { email: '', password: '', name: '' };

const name = yup.string().min(4).max(10).required();
const email = yup.string().email().required();
const password = yup
  .string()
  .min(10, 'Type 10 or more letters')
  .max(30, 'You do not type more than 30 letters')
  .required();

export const userSchema = yup.object().shape({
  name,
  email,
  password,
});

export const loginSchema = yup.object().shape({
  email,
  password,
});
