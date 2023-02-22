import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/forms/Form';
import { useLoginMutation } from '../../redux/login/loginApiSlice';
import { loginSchema } from '../../schemas/user.schema';
import { useForm } from 'react-hook-form';
import { setCredentials } from '../../redux/login/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAuth, useFormSubmit } from '../../hooks';
import { useEffect, useState } from 'react';
import { FormState, FormTypes, initialForStatus } from '../../components/forms';

export type FormLoginValues = { email: string; password: string };

const Login = () => {
  const { onSubmit, control, formStatus, isSuccess } = useFormSubmit({
    formType: FormTypes.LOGIN,
  });
  const user = useAuth(isSuccess);
  console.log(isSuccess, user);
  return (
    <>
      <Form
        title="Login"
        control={control}
        onSubmit={onSubmit}
        status={formStatus}
      />
    </>
  );
};
export default Login;
