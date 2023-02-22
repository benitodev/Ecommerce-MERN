import { useEffect, useState } from 'react';
import { useLoginMutation } from '../redux/login';
import { FormState, FormTypes, initialForStatus } from '../components/forms';
import { FormLoginValues } from '../pages/Login/Login';
import { FormRegisterValues } from '../pages/Register/Register';
import { setCredentials } from '../redux/login/authSlice';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginSchema, userSchema } from '../schemas/user.schema';
import { useAppDispatch } from '.';
import { useRegisterMutation } from '../redux/register';
interface UseFormSubmitProps {
  formType: FormTypes;
}

const useFormSubmit = ({ formType }: UseFormSubmitProps) => {
  const [login, data] = useLoginMutation();
  const [register, dataRegister] = useRegisterMutation();

  const [formStatus, setFormStatus] = useState<FormState>(initialForStatus);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(dataRegister.isSuccess, formType);
    if (data.isSuccess || dataRegister.isSuccess) {
      setTimeout(() => {
        //navigate(formType === FormTypes.LOGIN ? '/shop' : '/login');
      }, 1600);
    }
  }, [data.isSuccess, dataRegister.isSuccess]);

  const yupResolverType =
    formType === FormTypes.LOGIN ? loginSchema : userSchema;

  const defaultValuesType =
    formType === FormTypes.LOGIN
      ? { email: '', password: '' }
      : { name: '', email: '', password: '' };
  const {
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm<FormRegisterValues | FormLoginValues>({
    defaultValues: defaultValuesType,
    resolver: yupResolver(yupResolverType),
  });

  const successfullLogin = 'You have successfully logged in!';
  const successfullRegister = 'You have successfully registered';

  const formStatusResponseMessage =
    formType === FormTypes.LOGIN ? successfullLogin : successfullRegister;

  console.log(formStatusResponseMessage);
  const onSubmit = handleSubmit((user) => {
    if (formType === FormTypes.LOGIN) {
      login(user).then((res: any) => {
        if (res.error) {
          setFormStatus({
            err: true,
            message: res.error.data.message,
            status: res.error.status,
          });
        } else {
          setFormStatus({
            err: false,
            message: formStatusResponseMessage,
            status: 201,
          });
          dispatch(setCredentials(res.data));
          setTimeout(() => {
            setFormStatus(initialForStatus);
          }, 1500);
        }
      });
    } else if (formType === FormTypes.REGISTER) {
      register(user).then((res: any) => {
        if (res.error) {
          setFormStatus({
            err: true,
            message: res.error.data.message,
            status: res.error.status,
          });
        } else {
          setFormStatus({
            err: false,
            message: formStatusResponseMessage,
            status: 201,
          });
          dispatch(setCredentials(res.data));
          setTimeout(() => {
            setFormStatus(initialForStatus);
          }, 1500);
        }
      });
    }
  });

  return { formStatus, onSubmit, isSuccess: data.isSuccess, control };
};

export default useFormSubmit;
