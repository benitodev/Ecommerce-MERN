import Box from '@mui/material/Box';
import { FormTitle } from '../../styled-components/Form';
import FormInputText from './FormInputText';
import Button from '@mui/material/Button';
import { FormContainer } from '../../styled-components/Form';
import { Control } from 'react-hook-form/dist/types';
import { FormLoginValues } from '../../pages/Login/Login';
import ErrorForm from './StatusForm';
import { FormRegisterValues } from '../../pages/Register/Register';
import { FormState, FormTypes } from './Form.types';

interface Props {
  control: Control<FormLoginValues | FormRegisterValues>;
  title: string;
  status: FormState;
  onSubmit: () => Promise<void>;
  type?: FormTypes;
}

const Form = ({ control, title, onSubmit, type, status }: Props) => {
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
      {status.message && (
        <ErrorForm status={status.err}>{status.message}</ErrorForm>
      )}
      <FormContainer data-cy="login-form">
        {type === FormTypes.REGISTER && (
          <FormInputText
            dataTest="name-input"
            label="Name"
            name="name"
            control={control}
          />
        )}

        <FormInputText
          dataTest="email-input"
          label="Email"
          name="email"
          control={control}
        />
        <FormInputText
          dataTest="password-input"
          label="Password"
          name="password"
          control={control}
        />

        <Button id="send-login" onClick={onSubmit}>
          Submit
        </Button>
      </FormContainer>
    </Box>
  );
};
export default Form;
