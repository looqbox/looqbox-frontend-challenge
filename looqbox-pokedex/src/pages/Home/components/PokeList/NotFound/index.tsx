import React from 'react';

import sadPikachu from 'shared/assets/images/sadPikachu.gif';

import { Container, Title } from './styles';

const NotFound = () => {
  return (
    <Container>
      <Title>Pokemon não encontrado</Title>
      <img src={sadPikachu} alt="sadPikachu" />
    </Container>
  );
};

export default NotFound;
