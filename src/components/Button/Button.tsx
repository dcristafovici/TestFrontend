import React from "react";
import { ButtonInterface } from "./ButtonInterface";
import { ButtonStyled } from "./ButtonStyled";

const Button:React.FC<ButtonInterface> = ({ name, className, disabled }: ButtonInterface) => (
  <ButtonStyled className={className} disabled={disabled}>
    <span>{name}</span>
  </ButtonStyled>
)

export default Button;