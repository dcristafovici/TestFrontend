import React from 'react';
import { ErrorInterface } from './ErrorInterface';
import { ErrorStyled } from './ErrorStyled';

const Error: React.FC<ErrorInterface> = ({ errorMessage }: ErrorInterface) => (
  <ErrorStyled>
    {errorMessage}
  </ErrorStyled>

)

export default Error;