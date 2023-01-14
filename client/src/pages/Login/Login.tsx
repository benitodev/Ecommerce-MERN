import { yupResolver } from '@hookform/resolvers/yup';
import Form from '../../components/forms/Form';
import { useLoginMutation } from '../../redux/login/loginApiSlice';
import { loginSchema } from '../../schemas/user.schema';
import { useForm } from 'react-hook-form';
import { setCredentials } from '../../redux/login/authSlice';
import { useNavigate } from 'react-router-dom';
import { useAppDispatchHook, useAuthHook } from '../../hooks';

const Login = () => {
  const [login, data] = useLoginMutation();
  const dispatch = useAppDispatchHook();
  const user = useAuthHook();
  const navigate = useNavigate();
  console.log(user);
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = handleSubmit((user) => {
    login(user)
      .then((res: any) => dispatch(setCredentials(res.data)))
      .then(() => navigate('/shop'));
  });

  console.log(data);
  return <Form title="Login" control={control} onSubmit={onSubmit} />;
};
export default Login;
