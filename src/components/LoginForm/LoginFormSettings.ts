import * as Yup from 'yup';
import { InputInterface, InputTypeEnum } from "../Input/InputInterface";

export const LoginFormFields: InputInterface[] = [
  {
    type: InputTypeEnum.EMAIL,
    name: 'email',
    placeholder: 'Email',
  },
  {
    type: InputTypeEnum.PASSWORD,
    name: 'password',
    placeholder: 'Password',
    initialValue: ''
  },
]


export const LoginInitialValues = {
  email: "",
  password: "",
}

export const LoginSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Must be a email')
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required'),
})