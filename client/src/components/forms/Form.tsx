import Box from '@mui/material/Box';
import { FormTitle } from '../../styled-components/Form';
import FormInputText from './FormInputText';
import Button from '@mui/material/Button';
import { FormContainer } from '../../styled-components/Form';
import { Control } from 'react-hook-form/dist/types';

export enum FormType {
  LOGIN = 'login',
  REGISTER = 'register',
}

interface Props {
  control: Control;
  title: string;
  onSubmit: () => Promise<void>;
  type?: FormType;
}

const formType = FormType.REGISTER;

const Form = ({ control, title, onSubmit, type }: Props) => {
  return (
    <Box
      style={{
        display: 'grid',
        gap: '20px',
        margin: '20px 0',
        padding: '24px',
      }}
    >
      <FormTitle style={{ textAlign: 'center' }}>{title}</FormTitle>
      <FormContainer>
        {type === FormType.REGISTER && (
          <FormInputText label="Name" name="name" control={control} />
        )}

        <FormInputText label="Email" name="email" control={control} />
        <FormInputText label="Password" name="password" control={control} />

        <Button onClick={onSubmit}>Submit</Button>
      </FormContainer>
    </Box>
  );
};
export default Form;
