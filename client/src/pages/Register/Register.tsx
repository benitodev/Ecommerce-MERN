import { Paper, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Title } from './styled-components/register';
import FormInputText from '../../components/forms/FormInputText';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema, defaultValues } from '../../schemas/user.schema';
import { useRegisterMutation } from '../../redux/register';
import { RegisterRequest } from '../../redux/register/register.type';
import Form from '../../components/forms/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FormState, FormTypes, initialForStatus } from '../../components/forms';
import { useFormSubmit } from '../../hooks';

export type FormRegisterValues = {
  name: string;
  email: string;
  password: string;
};

const Register = () => {
  const { onSubmit, control, formStatus } = useFormSubmit({
    formType: FormTypes.REGISTER,
  });

  return (
    <Form
      control={control}
      title="Register"
      onSubmit={onSubmit}
      type={FormTypes.REGISTER}
      status={formStatus}
    />
  );
};
export default Register;
