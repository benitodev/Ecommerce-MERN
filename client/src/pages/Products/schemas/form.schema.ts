import * as yup from 'yup';

export const productFormSchema = yup.object().shape({
  price: yup.string(),
});
