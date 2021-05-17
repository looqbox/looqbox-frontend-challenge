import React from 'react';

import { Container } from './styles';

import { ButtonProps } from './types';

const Button = ({ maxSize, width, ...rest }: ButtonProps) => {
  return (
    <Container maxSize={maxSize} width={width}>
      <button type="button" {...rest} />
    </Container>
  );
};

export default Button;
