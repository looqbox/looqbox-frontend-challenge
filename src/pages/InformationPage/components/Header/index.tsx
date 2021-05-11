import React from "react";
import { Link } from "react-router-dom";
import { Container, BackIcon, Button } from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <BackIcon />
      </Link>
    </Container>
  );
};

export default Header;
