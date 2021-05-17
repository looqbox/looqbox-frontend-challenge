import React from 'react';

import { Container } from './styles';

import { InputProps } from './types';

const Input = ({ children, ...rest }: InputProps) => {
  return (
    <Container hasChildren={!!children}>
      <input type="text" {...rest} />
      {children}
    </Container>
  );
};

export default Input;
