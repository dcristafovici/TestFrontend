import styled from "styled-components";

export const InputStyled = styled.div`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
  input {
    width: 100%;
    height: 40px;
    padding-left: 20px;
    box-sizing: border-box;
    border: 1px solid #c2c2c2;
  }
`