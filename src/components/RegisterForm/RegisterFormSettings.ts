import * as Yup from 'yup';
import { InputInterface, InputTypeEnum } from "../Input/InputInterface";

export const RegisterFormFields: InputInterface[] = [
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
  {
    type: InputTypeEnum.PASSWORD,
    name: 'repeat_password',
    placeholder: 'Repeat Password',
  },
  {
    type: InputTypeEnum.TEXT,
    name: 'first_name',
    placeholder: 'First name',
  },
  {
    type: InputTypeEnum.TEXT,
    name: 'last_name',
    placeholder: 'Last name',
  },
]


export const RegisterInitialValues = {
  email: "",
  password: "",
  repeat_password: "",
  first_name: "",
  last_name: ""
}

export const RestaurantSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Must be a email')
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required'),
  repeat_password: Yup.string()
    .required('Repetead password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  first_name: Yup.string()
    .required('First name is required'),
  last_name: Yup.string()
    .required('Last name is required')
})