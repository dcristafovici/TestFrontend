import React from 'react'
import { InputInterface } from './InputInterface';
import { InputStyled } from './InputStyled';
import Error from '../Error';

const Input:React.FC<InputInterface> = ({ type, name, placeholder, ...rest } : InputInterface) => {
  const { value, onChange, onBlur, error } = rest;
  return (
    <InputStyled className='form-group'>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value || ''}
      />
      {error && <Error  errorMessage={error} />}
    </InputStyled>
  )
}

export default Input;
