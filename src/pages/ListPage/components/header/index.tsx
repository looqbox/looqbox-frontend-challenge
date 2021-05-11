import React from "react";

import { Container, Title, Text } from "./styles";

const header: React.FC = () => {
  return (
    <>
      <Container>
        <Title>Pokédex</Title>
        <Text>
          This site was made by Antônio Gally using PokeAPI to complete the Looqbox challenge.
          The website used the following technologies: React, TypeScript and
          JavaScript, with several dependencies.
        </Text>
      </Container>
    </>
  );
};

export default header;
