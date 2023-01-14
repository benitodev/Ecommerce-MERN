import { Paper, Typography, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Title } from './styled-components/register';
import FormInputText from '../../components/forms/FormInputText';
import Button from '@mui/material/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSchema, defaultValues } from '../../schemas/user.schema';
import { useRegisterMutation } from '../../redux/register';
import { RegisterRequest } from '../../redux/register/register.type';
import Form, { FormType } from '../../components/forms/Form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Register = () => {
  const [register, data] = useRegisterMutation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues,
    resolver: yupResolver(userSchema),
  });

  useEffect(() => {
    console.log(data.isSuccess);
    if (data.isSuccess) {
      navigate('/login');
    }
  }, [data.isSuccess]);

  const onSubmit = handleSubmit((user) => {
    register(user);
  });
  return (
    <Form
      control={control}
      title="Register"
      onSubmit={onSubmit}
      type={FormType.REGISTER}
    />
  );
};
export default Register;
