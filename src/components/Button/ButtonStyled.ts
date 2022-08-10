import styled from "styled-components";
import { ButtonClassNameEnum } from "./ButtonInterface";

export const ButtonStyled = styled.button`
  border: none;
  outline: none;
  box-shadow: none;
  background: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  cursor: pointer;
  border-radius: 6px;
  padding-left: 16px;
  padding-right: 16px;
  box-sizing: border-box;
  background: #60b5df;
  transition: all 0.3s ease-in-out;
  span {
    color: #fff;
  }
  &:hover {
    background-color: #7bc2e4;
  }
  &.${ButtonClassNameEnum.FULL} {
    width: 100%;
  }
  &[disabled] {
    pointer-events: none;
    filter: grayscale(1);
  }
`
