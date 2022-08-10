import React from "react";
import { FormInterface } from "./FormInterface";
import { FormStyled } from "./FormStyled";

const Form:React.FC<FormInterface> = ({ children, onSubmit }: FormInterface) => (
  <FormStyled onSubmit={onSubmit}>
    {children}
  </FormStyled>
)

export default Form;
