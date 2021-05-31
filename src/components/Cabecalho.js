import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Cabecalho = (props) => (
  <Navbar variant="light" style={{ color: "white", background: "#a92023" }}>
    <Link to="/" style={{ color: "white", textDecoration: "none" }}>
      <h1>Pokédex</h1>
    </Link>
  </Navbar>
);
