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
    name: 'repeatPassword',
    placeholder: 'Repeat Password',
  },
  {
    type: InputTypeEnum.TEXT,
    name: 'firstName',
    placeholder: 'First name',
  },
  {
    type: InputTypeEnum.TEXT,
    name: 'lastName',
    placeholder: 'Last name',
  },
]


export const RegisterInitialValues = {
  email: "",
  password: "",
  repeatPassword: "",
  firstName: "",
  lastName: ""
}

export const RestaurantSchemaValidation = Yup.object().shape({
  email: Yup.string()
    .email('Must be a email')
    .required('Email is required'),
  password: Yup.string()
    .min(6)
    .required('Password is required'),
  repeatPassword: Yup.string()
    .required('Repetead password is required')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  firstName: Yup.string()
    .required('First name is required'),
  lastName: Yup.string()
    .required('Last name is required')
})