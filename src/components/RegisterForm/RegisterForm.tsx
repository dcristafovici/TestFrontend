import React, { useState } from "react";
import Button from "../Button";
import { ButtonClassNameEnum } from "../Button/ButtonInterface";
import Form from "../Form";
import Input from "../Input/Input";
import { InputInterface } from "../Input/InputInterface";
import { RegisterFormFields, RegisterInitialValues, RestaurantSchemaValidation } from './RegisterFormSettings'
import { useFormik } from 'formik';

const RegisterForm:React.FC = () => {
  const [initialValues, setInitialValues] = useState(RegisterInitialValues);

  const formik = useFormik({
    initialValues,
    validationSchema: RestaurantSchemaValidation,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      console.log(values);
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <div className="form-title">Register form</div>
      
      {RegisterFormFields.map((field: InputInterface) => {
        const { name, type, placeholder } = field;
        const error: any = formik.errors;
        return <Input
          {...formik.getFieldProps(name)}
          key={name}
          type={type}
          name={name}
          placeholder={placeholder} 
          error={error[name]}
        />
        })}
      
      <Button
        className={ButtonClassNameEnum.FULL}
        name="Register"
        disabled={!formik.dirty || !formik.isValid }
      />
    </Form> 
  )
}

export default RegisterForm;
